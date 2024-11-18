<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{

    public function run(): void
    {
        $roles = [
            ['name' => 'Customer', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Provider', 'created_at' => now(), 'updated_at' => now()],
        ];

        DB::table('roles')->insert($roles);
    }
}
