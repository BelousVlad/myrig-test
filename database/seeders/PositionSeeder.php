<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
// use Illuminate\Support\Facades\DB;
use App\Models\Position;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Position::updateOrCreate([
            'id' => 1,
            'title' => 'Developer'
        ]);
        Position::updateOrCreate([
            'id' => 2,
            'title' => 'QA '
        ]);
        Position::updateOrCreate([
            'id' => 3,
            'title' => 'Accountant'
        ]);
        Position::updateOrCreate([
            'id' => 4,
            'title' => 'Manager'
        ]);
    }
}
