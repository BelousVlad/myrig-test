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
        Position::create([
            'title' => 'Developer'
        ]);
        Position::create([
            'title' => 'QA '
        ]);
        Position::create([
            'title' => 'Accountant'
        ]);
        Position::create([
            'title' => 'Manager'
        ]);
    }
}
