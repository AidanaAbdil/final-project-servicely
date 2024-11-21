<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\UserProfile;


class UserProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user_profiles = [
            [

                "user_id" => '1',
                'job_title' => 'Lawyer',
                'bio' => 'Experienced attorney specializing in Family Law. Dedicated to providing personalized legal solutions, protecting clients rights, and achieving favorable outcomes. Committed to clear, actionable advice and a results-driven approach for every case',
                'location' => 'Prague',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()

            ],
            [

                "user_id" => '3',
                'job_title' => 'Cosmetologist',
                'bio' => 'Skilled beautician offering personalized beauty treatments, from hairstyling and makeup to skincare. Dedicated to enhancing your natural beauty with expert care, attention to detail, and a passion for making you feel confident and refreshed.',
                'location' => 'Prague',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()

            ],
            [

                "user_id" => '4',
                'job_title' => 'Freelancer/Pet sitter',
                'bio' => 'Experienced and loving pet sitter dedicated to providing your furry friends with the care they deserve. Whether it`s daily walks, playtime, or overnight stays, I ensure your pets feel safe, happy, and comfortable while you`re away.',
                'location' => 'Prague',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()

            ],
            [

                "user_id" => '7',
                'job_title' => 'Graphic Designer',
                'bio' => 'Creative graphic designer specializing in brand identity, digital design, and visual storytelling. Passionate about transforming ideas into eye-catching designs that communicate your message effectively and leave a lasting impression.',
                'location' => 'Prague',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()

            ],
            [

                "user_id" => '8',
                'job_title' => 'Accountant',
                'bio' => 'Detail-oriented accountant with expertise in financial planning, tax preparation, and business accounting. Committed to providing accurate, timely, and strategic financial solutions to help clients achieve their financial goals and stay compliant.',
                'location' => 'Prague',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()

            ],
            [

                "user_id" => '9',
                'job_title' => 'Translator/Interpreter',
                'bio' => 'Fluent in Czech and Arabic, I provide professional interpretation services for meetings, conferences, and events. With a focus on clarity and accuracy, I ensure smooth communication in real-time, helping clients bridge language barriers with confidence.',
                'location' => 'Prague',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()

            ],

             
        ];
            DB::table('user_profile')->truncate();

        foreach ($user_profiles as $userprofile) {

            UserProfile::create($userprofile);
        }
    }

}