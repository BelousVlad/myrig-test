<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // var_dump($this->faker->unixTime());
        // var_dump(now());
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'date_of_birth' => $this->faker->date(),
            'weight' => $this->faker->randomNumber(3, false),
            'height' => $this->faker->numberBetween(100, 250),
            'salary' => $this->faker->randomNumber(4, true),
            'position_id' => $this->faker->numberBetween(1,4),
        ];
    }
}
