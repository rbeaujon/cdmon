<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHostingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('hostings')) return;

        Schema::create('hostings', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('domain', 30);
            $table->unsignedInteger('capacity');
            $table->unsignedInteger('server_id');
            $table->unsignedInteger('customer_id');
            $table->unique(["domain"], 'hosting_domain_unique');

            $table->index(["server_id"], 'hosting_server_id_foreign');
            $table->index(["customer_id"], 'hosting_customer_id_foreign');

            $table->timestamps();
        });

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hostings');
    }
}
