<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Employee;
use App\Http\Controllers\EmployeeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::prefix('employees')->group(function() {
    Route::get('', [EmployeeController::class,'getEmployees']);

    Route::delete('{id}', [EmployeeController::class, 'deleteEmployee', ['test']]);

    //Симуляция удаления, 
    /*
        пункт 6 "Реализовывать удаление выбранных строк
            по нажатию на эту кнопку не нужно.
        "
    */
    Route::delete('fake/{id}',function($id) {
        $employee = Employee::with('position')->findOrFail($id);
        // $employee->delete();
        
        $employee->makeHidden('position_id');
        $employee = $employee->toArray();
        $employee['position'] = $employee['position']['title'];
        
        return response()->json($employee);
    });
});
