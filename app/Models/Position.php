<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Employee;

class Position extends Model
{
    use HasFactory;

    protected $table = "positions";
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;

    public function employees()
    {
        return $this->belongsMany(Employee::class);
    }
}
