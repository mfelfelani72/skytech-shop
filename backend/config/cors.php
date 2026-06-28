<?php

return [
    'paths' => [
        'api/*',
        'oauth/*',
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:3000',
    ],

    'allowed_headers' => ['*'],

    'supports_credentials' => true,
];