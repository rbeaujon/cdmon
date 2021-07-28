<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ServersSeeder::class);
        $this->call(CustomersSeeder::class);
        $this->call(HostingsSeeder::class);
    }
}
