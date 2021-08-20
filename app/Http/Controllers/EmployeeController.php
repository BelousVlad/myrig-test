<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function getEmployees() {

        $empls = Employee::with('position')->get();

        foreach($empls as $emp)
        {
            $emp->makeHidden('position_id');
        }
        
        $empls = $empls->toArray();
        
        foreach($empls as &$emp)
        {
            $emp['position'] = $emp['position']['title'];
        }

        return response()->json($empls);
    }

    public function deleteEmployee($id) {
        
        $employee = Employee::with('position')->findOrFail($id);
        $employee->delete();

        $employee->makeHidden('position_id');
        $employee = $employee->toArray();
        $employee['position'] = $employee['position']['title'];
        
        return response()->json($employee);
    }
}
