import React, {useState} from "react";
import foodData from "../foods.json"
import FoodBox from "./FoodBox"
import FoodForm from "./FoodForm";

function Foods(){
    const [foods, setFoods] = useState(foodData)
    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const addFood = newFood => {
        const updatedFoods = [...foods, newFood]
        setFoods(updatedFoods)
        toggleForm()
    }

    return(      
        <div>
            <h1>IronNutrition</h1>
            <button onClick = {toggleForm} className="button">Add food</button>
            {showForm && <FoodForm addFood = {addFood} />}
            

            <div className = "columns">
                <div className = "column">
                {
                    foods.map(food => {
                        return <FoodBox food = {food} />
                    })
                }
                </div>

                <div className = "column"></div>
        </div>
        </div>
    )
}

export default Foods