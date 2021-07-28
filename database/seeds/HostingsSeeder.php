<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class HostingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hostings')->truncate();
        $this->createHostings(200);
    }

    private function createHostings($num)
    {
    	$faker = Faker::create();

        $optionsHD = [256, 512, 1024, 2048, 4096, 8192];

        for ($i = 0; $i < $num; $i++) {
            DB::table('hostings')->insert([
                'domain' => str_random(10) . ".com",
                'capacity' => $optionsHD[$faker->numberBetween(0,5)],
                'server_id' => $faker->numberBetween(1,50),
                'customer_id' => $faker->numberBetween(1,100),
            ]);
        }
    }
}
