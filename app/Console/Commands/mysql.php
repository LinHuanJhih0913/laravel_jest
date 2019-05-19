<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class mysql extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mysql:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '透過指令建立 MySQL 資料庫';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $database = config('database.connections.mysql.database', 'homestead');
        $charset = config('database.connections.mysql.charset', 'utf8mb4');
        $collation = config('database.connections.mysql.collation', 'utf8mb4_unicode_ci');

        config(['database.connections.mysql.database' => null]);

        DB::statement("CREATE DATABASE IF NOT EXISTS $database CHARACTER SET $charset COLLATE $collation;");

        config(['database.connections.mysql.database' => $database]);
    }
}
