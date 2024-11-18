<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Cleaning Services', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Beauty Services', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Pet Services', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Creative Services', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Financial Services', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Translation and Writing Services', 'created_at' => now(), 'updated_at' => now()]
        ];

        DB::table('categories')->insert($categories);
    }
}
