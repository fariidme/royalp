<?php
/**
 * Royal Elevators & Escalators Ltd. — contact form backend.
 *
 * Accepts the portfolio contact form, validates input server-side,
 * applies a simple honeypot + per-IP rate limit, and delivers the enquiry
 * by email. Returns JSON so the front-end can show a real success/error state.
 *
 * Requires a PHP host with a configured mailer (e.g. Hostinger shared hosting).
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

// Only accept POST for this endpoint.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'Method not allowed.', 405);
}

// Where enquiries are delivered.
$recipient = 'info@royalelevator.so';
$subjectPrefix = 'Website enquiry';

/** Send a JSON response and stop. */
function respond(bool $ok, string $error = '', int $status = 200): void
{
    http_response_code($status);
    echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    exit;
}

/** Trim + strip control characters + limit length. */
function clean(?string $value, int $max): string
{
    $value = trim((string) $value);
    // Remove NUL and other control chars that can break headers/logs.
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/u', '', $value);
    return mb_substr($value, 0, $max);
}

// ---- Honeypot: real users never fill this hidden field. ----
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    // Pretend success so bots get no signal.
    respond(true);
}

$name = clean($_POST['name'] ?? '', 200);
$email = clean($_POST['email'] ?? '', 200);
$phone = clean($_POST['phone'] ?? '', 60);
$service = clean($_POST['service'] ?? '', 200);
$message = clean($_POST['message'] ?? '', 5000);

// ---- Server-side validation ----
if ($name === '') {
    respond(false, 'Please enter your name.', 422);
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 422);
}
if ($message === '') {
    respond(false, 'Please tell us about your project.', 422);
}

// ---- Simple per-IP rate limit (5 requests / 10 minutes) ----
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/re_contact_' . md5($ip) . '.json';
$now = time();
$limit = 5;
$window = 600;

$state = ['count' => 0, 'first' => $now];
if (is_file($bucket)) {
    $raw = @file_get_contents($bucket);
    $decoded = $raw ? json_decode($raw, true) : null;
    if (is_array($decoded)) {
        $state = ['count' => (int) ($decoded['count'] ?? 0), 'first' => (int) ($decoded['first'] ?? $now)];
    }
}
if ($now - $state['first'] > $window) {
    $state = ['count' => 0, 'first' => $now];
}
if ($state['count'] >= $limit) {
    respond(false, 'Too many requests. Please try again shortly.', 429);
}
$state['count']++;
@file_put_contents($bucket, json_encode($state));

// ---- Build and send the email ----
$body = "Name: {$name}\n"
    . "Email: {$email}\n"
    . ($phone !== '' ? "Phone: {$phone}\n" : '')
    . ($service !== '' ? "Service: {$service}\n" : '')
    . "\nMessage:\n{$message}\n";

// Use a sender on our own domain and set Reply-To to the enquirer.
$from = 'no-reply@royalelevators.so';
$headers = "From: Royal Elevators Website <{$from}>\r\n"
    . "Reply-To: {$name} <{$email}>\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

$subject = $subjectPrefix . ($service !== '' ? ' — ' . $service : '');

// Best-effort delivery via the host mailer.
$sent = @mail($recipient, $subject, $body, $headers);

if ($sent) {
    respond(true);
}

// mail() can return false when the host mailer is misconfigured.
respond(false, 'The message could not be sent. Please email us directly at info@royalelevator.so.', 500);
