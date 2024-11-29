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
                'user_id' => '8',
                'title' => 'Dog Walking Service',
                'category_id' => '3',
                'location' => 'Prague',
                'address' => 'Vinohrady Park, Prague, Czech Republic',
                'description' => 'Professional dog walking service ensuring your furry friend gets exercise and care while you are busy.',
                'duration' => '1',
                'price' => '300',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '8',
                'title' => 'Pet Grooming',
                'category_id' => '3',
                'location' => 'Prague',
                'address' => 'Riegrovy sady 16, Prague, Czech Republic',
                'description' => 'Full-service grooming for dogs and cats, including bathing, trimming, and nail clipping.',
                'duration' => '2',
                'price' => '1200',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '8',
                'title' => 'Cat Sitting',
                'category_id' => '3',
                'location' => 'Prague',
                'address' => 'Letna Gardens, Prague, Czech Republic',
                'description' => 'Reliable cat sitting service ensuring your pet is fed, entertained, and cared for while you are away.',
                'duration' => '3',
                'price' => '500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '8',
                'title' => 'Pet Boarding',
                'category_id' => '3',
                'location' => 'Prague',
                'address' => 'Strahovská zahrada 8, Prague, Czech Republic',
                'description' => 'Overnight boarding service in a safe and loving environment for your pet while you travel.',
                'duration' => '24',
                'price' => '2000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '8',
                'title' => 'Exotic Pet Care',
                'category_id' => '3',
                'location' => 'Prague',
                'address' => 'Karlovo náměstí 12, Prague, Czech Republic',
                'description' => 'Specialized care for exotic pets, including reptiles and birds, tailored to their unique needs.',
                'duration' => '2',
                'price' => '1500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '2',
                'title' => 'Home Deep Cleaning',
                'category_id' => '1',
                'location' => 'Prague',
                'address' => 'Wenceslas Square 10, Prague, Czech Republic',
                'description' => 'Comprehensive deep cleaning for your home, ensuring every corner is spotless and your living space is refreshed.',
                'duration' => '4',
                'price' => '2500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '2',
                'title' => 'Office Cleaning Service',
                'category_id' => '1',
                'location' => 'Prague',
                'address' => 'Na Příkopě 20, Prague, Czech Republic',
                'description' => 'Keep your workspace clean and organized with our professional office cleaning service.',
                'duration' => '3',
                'price' => '3000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '2',
                'title' => 'Carpet Cleaning',
                'category_id' => '1',
                'location' => 'Prague',
                'address' => 'Vinohradská 25, Prague, Czech Republic',
                'description' => 'Specialized carpet cleaning service to remove stains, dirt, and allergens, leaving your carpets fresh and clean.',
                'duration' => '2',
                'price' => '1800',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '2',
                'title' => 'Window Cleaning',
                'category_id' => '1',
                'location' => 'Prague',
                'address' => 'Letenská 15, Prague, Czech Republic',
                'description' => 'Crystal-clear window cleaning for your home or office, ensuring streak-free results every time.',
                'duration' => '2',
                'price' => '1200',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '2',
                'title' => 'Move-In/Move-Out Cleaning',
                'category_id' => '1',
                'location' => 'Prague',
                'address' => 'Smíchovská 8, Prague, Czech Republic',
                'description' => 'Thorough cleaning service to prepare your home for a new move-in or leave it spotless when moving out.',
                'duration' => '5',
                'price' => '4000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '3',
                'title' => 'Facial Treatment',
                'category_id' => '2',
                'location' => 'Prague',
                'address' => 'Karlova 3, 110 00 Prague, Czech Republic',
                'description' => 'Rejuvenating facial treatments to cleanse, hydrate, and refresh your skin for a glowing appearance.',
                'duration' => '1.5',
                'price' => '1200',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '3',
                'title' => 'Manicure & Pedicure',
                'category_id' => '2',
                'location' => 'Prague',
                'address' => 'Vaclavske Namesti 10, Prague, Czech Republic',
                'description' => 'Professional manicure and pedicure services to ensure neat and well-groomed hands and feet.',
                'duration' => '2',
                'price' => '800',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '3',
                'title' => 'Hair Styling',
                'category_id' => '2',
                'location' => 'Prague',
                'address' => 'Jungmannova 7, Prague, Czech Republic',
                'description' => 'Custom hair styling to match your unique look and occasion, performed by experienced professionals.',
                'duration' => '2',
                'price' => '1500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '3',
                'title' => 'Waxing Services',
                'category_id' => '2',
                'location' => 'Prague',
                'address' => 'Namesti Miru 2, Prague, Czech Republic',
                'description' => 'Quick and efficient waxing services for smooth and hair-free skin.',
                'duration' => '1',
                'price' => '600',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '3',
                'title' => 'Makeup Session',
                'category_id' => '2',
                'location' => 'Prague',
                'address' => 'Letenska 15, Prague, Czech Republic',
                'description' => 'Professional makeup sessions tailored to your event, enhancing your natural beauty with quality products.',
                'duration' => '1.5',
                'price' => '2000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '5',
                'title' => 'Portrait Photography',
                'category_id' => '4',
                'location' => 'Prague',
                'address' => 'Stare Mesto 12, Prague, Czech Republic',
                'description' => 'Professional portrait photography to capture your best moments with high-quality equipment and skilled techniques.',
                'duration' => '2',
                'price' => '2500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '5',
                'title' => 'Graphic Design Services',
                'category_id' => '4',
                'location' => 'Prague',
                'address' => 'Petrska 8, Prague, Czech Republic',
                'description' => 'Creative graphic design solutions for logos, posters, and branding, tailored to your specific needs.',
                'duration' => '3',
                'price' => '4000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '5',
                'title' => 'Custom Artwork',
                'category_id' => '4',
                'location' => 'Prague',
                'address' => 'Holesovice 20, Prague, Czech Republic',
                'description' => 'Commission unique artwork created by skilled artists to add a personal touch to your space.',
                'duration' => '5',
                'price' => '7000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '5',
                'title' => 'Content Writing',
                'category_id' => '4',
                'location' => 'Prague',
                'address' => 'Narodni 25, Prague, Czech Republic',
                'description' => 'Engaging and creative content writing services for blogs, articles, and marketing materials.',
                'duration' => '3',
                'price' => '3000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '5',
                'title' => 'Music Production',
                'category_id' => '4',
                'location' => 'Prague',
                'address' => 'Vrsovice 14, Prague, Czech Republic',
                'description' => 'Professional music production services to create unique tracks, soundtracks, or jingles.',
                'duration' => '4',
                'price' => '8000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '6',
                'title' => 'Personal Finance Consulting',
                'category_id' => '5',
                'location' => 'Prague',
                'address' => 'Vinohrady 10, Prague, Czech Republic',
                'description' => 'Get expert advice on managing your personal finances, including budgeting, investments, and savings strategies.',
                'duration' => '2',
                'price' => '1500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '6',
                'title' => 'Business Financial Planning',
                'category_id' => '5',
                'location' => 'Prague',
                'address' => 'Masarykovo 22, Prague, Czech Republic',
                'description' => 'Comprehensive financial planning for small and medium businesses, including cash flow management and tax planning.',
                'duration' => '3',
                'price' => '5000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '6',
                'title' => 'Investment Strategy Consultation',
                'category_id' => '5',
                'location' => 'Prague',
                'address' => 'Old Town 6, Prague, Czech Republic',
                'description' => 'Professional guidance on creating an effective investment strategy to grow and protect your wealth.',
                'duration' => '2',
                'price' => '3500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '6',
                'title' => 'Tax Optimization Services',
                'category_id' => '5',
                'location' => 'Prague',
                'address' => 'Karlin 14, Prague, Czech Republic',
                'description' => 'Tax planning and optimization services to minimize your tax liabilities and maximize deductions.',
                'duration' => '2',
                'price' => '4000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '6',
                'title' => 'Retirement Planning Advice',
                'category_id' => '5',
                'location' => 'Prague',
                'address' => 'Smichov 11, Prague, Czech Republic',
                'description' => 'Expert advice on planning for retirement, including pension planning, savings, and investment strategies.',
                'duration' => '2',
                'price' => '3000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '4',
                'title' => 'English to Czech Translation',
                'category_id' => '6',
                'location' => 'Prague',
                'address' => 'Wenceslas Square 3, Prague, Czech Republic',
                'description' => 'Accurate English to Czech translation services for business, legal, and personal documents.',
                'duration' => '1',
                'price' => '1200',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '4',
                'title' => 'Czech to English Translation',
                'category_id' => '6',
                'location' => 'Prague',
                'address' => 'Vinohrady 8, Prague, Czech Republic',
                'description' => 'Professional Czech to English translation services for legal, technical, and academic purposes.',
                'duration' => '1',
                'price' => '1300',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '4',
                'title' => 'Proofreading and Editing',
                'category_id' => '6',
                'location' => 'Prague',
                'address' => 'Old Town 7, Prague, Czech Republic',
                'description' => 'Professional proofreading and editing services to ensure your documents are clear, concise, and error-free.',
                'duration' => '2',
                'price' => '1500',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '4',
                'title' => 'Content Writing for Websites',
                'category_id' => '6',
                'location' => 'Prague',
                'address' => 'Nove Mesto 9, Prague, Czech Republic',
                'description' => 'Creative and engaging content writing services for websites, blogs, and online marketing materials.',
                'duration' => '3',
                'price' => '2000',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => '4',
                'title' => 'Business Document Translation',
                'category_id' => '6',
                'location' => 'Prague',
                'address' => 'Karlin 5, Prague, Czech Republic',
                'description' => 'Fast and professional translation of business documents, contracts, reports, and presentations.',
                'duration' => '2',
                'price' => '1800',
                'currency' => 'CZK',
                'image_url' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];
        DB::table('services')->truncate();

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
