<?php
header('Content-Type: application/json');

// Load environment variables
$env = parse_ini_file(__DIR__ . '/../../.env');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!isset($data['name']) || !isset($data['email']) || !isset($data['phone'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Basic validation
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Configure PHPMailer
require __DIR__ . '/../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = $env['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $env['SMTP_USER'];
    $mail->Password = $env['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $env['SMTP_PORT'];

    // Recipients
    $mail->setFrom('noreply@afripulse.app', 'AfriPulse Program');
    $mail->addAddress('ask@afripulse.app', 'AfriPulse Team');
    $mail->addReplyTo($data['email'], $data['name']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New AfriPulse Program Inquiry';
    
    // Build email body
    $body = "<h2>New Program Application</h2>";
    $body .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>";
    $body .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>";
    $body .= "<p><strong>Phone:</strong> " . htmlspecialchars($data['phone']) . "</p>";
    
    if (isset($data['location'])) {
        $body .= "<p><strong>Location:</strong> " . htmlspecialchars($data['location']) . "</p>";
    }
    
    if (isset($data['background'])) {
        $body .= "<p><strong>Background:</strong> " . htmlspecialchars($data['background']) . "</p>";
    }
    
    if (isset($data['goals'])) {
        $body .= "<p><strong>Goals:</strong> " . htmlspecialchars($data['goals']) . "</p>";
    }

    $mail->Body = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    
    echo json_encode(['success' => true, 'message' => 'Application received']);
} catch (Exception $e) {
    error_log("Mailer Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
} 