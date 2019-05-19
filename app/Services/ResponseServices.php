<?php

namespace App\Services;

class ResponseServices
{
    public function response($data, $status_code)
    {
        return response()->json($data, $status_code);
    }
}