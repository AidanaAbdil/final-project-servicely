<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\UserProfile;

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
                'phone' => '602345678',
                'role_id' => '2',
                'email' => 'peter@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Candice',
                'surname' => 'Peterson',
                'phone' => '603456789',
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
                'phone' => '604567890',
                'role_id' => '2',
                'email' => 'erik@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'David',
                'surname' => 'Boil',
                'phone' => '605678901',
                'role_id' => '2',
                'email' => 'david@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Stefan',
                'surname' => 'Baileys',
                'phone' => '606789012',
                'role_id' => '2',
                'email' => 'stefan@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Sarah',
                'surname' => 'Downey',
                'phone' => '607890123',
                'role_id' => '1',
                'email' => 'sarah@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Ivan',
                'surname' => 'Joe',
                'phone' => '608901234',
                'role_id' => '1',
                'email' => 'ivan@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Steven',
                'surname' => 'Vans',
                'phone' => '609012345',
                'role_id' => '1',
                'email' => 'steven@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'firstname' => 'Alisson',
                'surname' => 'Puma',
                'phone' => '610123456',
                'role_id' => '1',
                'email' => 'alisson@mail.com',
                'password' => Hash::make('adina123'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];
        DB::table('users')->truncate();

        foreach ($users as $user) {
            $userCreated = User::create($user);

            UserProfile::create([
                'user_id' => $userCreated->id
            ]);
        }
    }
}
