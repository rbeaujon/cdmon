<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class CustomersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customers')->truncate();
        $this->createCustomers(100);
    }
    
    private function createCustomers($num)
    {
    	$faker = Faker::create();
        
        for ($i = 0; $i < $num; $i++) { 
            DB::table('customers')->insert([
                'name' => $faker->firstName,
                'lastname' => $faker->lastName,
                'email' => $faker->unique()->email,
            ]);
        }
    }
}
