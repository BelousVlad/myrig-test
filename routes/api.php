<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Employee;

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
    Route::get('',function() {

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
    });

    Route::delete('{id}',function($id) {
        $employee = Employee::findOrFail($id);
        $employee->delete();
        return response()->json($employee);
    });
});
