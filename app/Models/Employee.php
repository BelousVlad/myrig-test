<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Position;

class Employee extends Model
{
    use HasFactory;

    protected $table = "employees";
    public $timestamps = false;
    // protected $dateFormat = 'U';
    
    protected $casts = [
        'date_of_birth' => 'timestamp',
    ];

    public function position()
    {
        // return $this->morphTo('position_id');
        return $this->hasOne(Position::class, 'id', 'position_id');
    }

    public function getHeightAttribute() {
        $in = $this->attributes['height'] / 2.54;
        $ft = floor($in / 12);
        $in = $in % 12;
        // $emp['height'] = "$ft'$in\"";
        return "$ft'$in\"";
    }
}
