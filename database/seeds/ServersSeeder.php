<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class ServersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('servers')->truncate();
        $this->createServers(50);
    }

    private function createServers($num)
    {
    	$faker = Faker::create();

        $optionsMemory = [4, 8, 16, 32, 64, 128];
        $optionsHD = [256, 512, 1024, 2048, 4096, 8192];
        $optionsIPs = [192, 127, 240, 196, 261, 124, 216, 206, 245, 194, 93, 61, 4];

        for ($i = 0; $i < $num; $i++) {
            DB::table('servers')->insert([
                'name' => str_random(10),
                'memory' => $optionsMemory[$faker->numberBetween(0,5)],
                'hd' => $optionsHD[$faker->numberBetween(0,5)],
                'ip' => $optionsIPs[$faker->numberBetween(0,12)].".".$optionsIPs[$faker->numberBetween(0,12)].".".$optionsIPs[$faker->numberBetween(0,12)].".".$optionsIPs[$faker->numberBetween(0,12)],
            ]);
        }
    }
}
