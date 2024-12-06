<?php
define('BASE_PATH', dirname(__DIR__));
define('UPLOAD_PATH', BASE_PATH . '/public/uploads');
define('ALLOWED_FILE_TYPES', ['jpg', 'jpeg', 'png', 'pdf']);
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB

return [
    'app' => [
        'name' => 'Revenu Dépense',
        'version' => '1.0.0',
        'url' => 'http://localhost',
        'timezone' => 'Europe/Paris',
    ],
    'session' => [
        'lifetime' => 7200, // 2 hours
        'path' => '/',
        'domain' => '',
        'secure' => false,
        'httponly' => true
    ]
];