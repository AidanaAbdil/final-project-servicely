<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'user_id' => '3',
                'title' => 'Brow lamination',
                'category_id' => '2',
                'location' => 'Prague',
                'description' => 'Brow Lamination is a popular beauty treatment designed to enhance the appearance of eyebrows by giving them a fuller and more defined look. It focuses on restructuring the brow hairs to stay in a desired shape for an extended period.',
                'duration' => '2',
                'price' => '800',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => '4',
                'title' => 'Dog sitting',
                'category_id' => '3',
                'location' => 'Prague',
                'description' => 'Dog sitting provides loving care for your furry friend when you are away. From feeding and playtime to walks and cuddles, your dog gets personalized attention in a safe, comfortable environment. Perfect for peace of mind and a happy pup!',
                'duration' => '24',
                'price' => '700',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => '6',
                'title' => 'Cat sitting',
                'category_id' => '3',
                'location' => 'Prague',
                'description' => 'Cat sitting provides loving care for your furry friend when you are away. From feeding, playtime and cuddles, your cat gets personalized attention in a safe, comfortable environment. Perfect for peace of mind!',
                'duration' => '24',
                'price' => '800',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => '7',
                'title' => 'Logo design',
                'category_id' => '4',
                'location' => 'Prague',
                'description' => 'Our logo design service creates unique, professional logos tailored to your brand. We blend creativity and strategy to craft a visual identity that stands out, resonates with your audience, and leaves a lasting impression.',
                'duration' => '24',
                'price' => '2500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => '8',
                'title' => 'Accounting services',
                'category_id' => '5',
                'location' => 'Prague',
                'description' => 'Our accounting services offer precise financial management tailored to your business. From bookkeeping to tax preparation, we ensure compliance, streamline finances, and provide insights to drive growth and success.',
                'duration' => '24',
                'price' => '4500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => '9',
                'title' => 'Translation services',
                'category_id' => '6',
                'location' => 'Prague',
                'description' => 'Our translation services deliver accurate, culturally sensitive translations for documents, websites, and more. We specialize in bridging language barriers, ensuring clear communication in any industry or context.',
                'duration' => '24',
                'price' => '5000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];
        DB::table('services')->truncate();

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
