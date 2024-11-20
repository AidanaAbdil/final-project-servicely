<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'firstname' => 'Peter',
                'surname' => 'Smith',
                'phone' => '13432531',
                'role_id' => '2',
                'email' => 'peter@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Candice',
                'surname' => 'Peterson',
                'phone' => '13432531',
                'role_id' => '2',
                'email' => 'candice@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Carla',
                'surname' => 'Donal',
                'phone' => '42131231',
                'role_id' => '2',
                'email' => 'carl@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Erik',
                'surname' => 'Larsson',
                'phone' => '21321',
                'role_id' => '2',
                'email' => 'erik@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'David',
                'surname' => 'Boil',
                'phone' => '13432531',
                'role_id' => '2',
                'email' => 'david@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Stefan',
                'surname' => 'Baileys',
                'phone' => '13432531',
                'role_id' => '2',
                'email' => 'stefan@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Sarah',
                'surname' => 'Downey',
                'phone' => '13432531',
                'role_id' => '1',
                'email' => 'sarah@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Ivan',
                'surname' => 'Joe',
                'phone' => '13432531',
                'role_id' => '1',
                'email' => 'ivan@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Steven',
                'surname' => 'Vans',
                'phone' => '13432531',
                'role_id' => '1',
                'email' => 'steven@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Alisson',
                'surname' => 'Puma',
                'phone' => '13432531',
                'role_id' => '1',
                'email' => 'alisson@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];
        DB::table('users')->truncate();

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
