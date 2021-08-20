<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Employee;

class EmployeeTest extends TestCase
{
    public function test_delete_employee_get_json()
    {
        $employee = Employee::factory()->create();
        $response = $this->delete('api/employees/'.$employee->id);
        // var_dump($employee->id);
        //Удалён ли
        $this->assertDeleted($employee);
        //Тот ли json пришёл
        $response
            ->assertJson(fn ($json) =>
                $json->where('id', $employee->id)
                    ->where('first_name', $employee->first_name)
                    ->where('last_name', $employee->last_name)
                    ->where('date_of_birth', $employee->date_of_birth)
                    ->where('weight', $employee->weight)
                    ->where('height', $employee->height)
                    ->where('salary', $employee->salary)
                    ->where('position', $employee->position->title)
            );
    }

    public function test_delete_employee_incorrect_id()
    {
        $response = $this->delete('api/employees/-1');
        $response->assertStatus(404);
    }

}
