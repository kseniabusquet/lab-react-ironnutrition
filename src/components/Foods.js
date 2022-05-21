import React, {useState} from "react";
import foodData from "../foods.json"
import FoodBox from "./FoodBox"
import FoodForm from "./FoodForm";
import Search from "./Search";

function Foods(){
    const [foods, setFoods] = useState(foodData)
    const [showForm, setShowForm] = useState(false)
    const [filtered, setFiltered] = useState(foodData)
    const [menu, setMenu] = useState([])

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const addFood = newFood => {
        const updatedFoods = [...foods, newFood]
        const updatedFilteredFood = [...filtered, newFood]
        
        setFoods(updatedFoods)
        setFiltered(updatedFilteredFood)
        toggleForm()
    }

    const filterFood = term => {
        const filteredFood = foods.filter(food => {
            return food.name.toLowerCase().includes(term.toLowerCase())
        })

        setFiltered(filteredFood)
    }

    const addToMenu = foodData => {
        const updatedMenu = [...menu, foodData]
        setMenu(updatedMenu)
    }

    const totalCalories = () => {
        return menu.reduce((acc, val) => {
            return acc + val.calories
        }, 0)
    }

    return(      
        <div>
            <h1>IronNutrition</h1>
            <button onClick = {toggleForm} className="button">Add food</button>
            {showForm && <FoodForm addFood = {addFood} />}
            
            <Search filterFood = {filterFood}/>

            <div className = "columns">
                <div className = "column">
                {
                    filtered.map(food => {
                        return <FoodBox food = {food} addToMenu = {addToMenu} />
                    })
                }
                </div>

                <div className = "column">
                    <h2>Today's food</h2>
                    <ul>
                        {
                            menu.map(food => {
                                return <li>{food.quantity} {food.name} = {food.calories} cal</li>
                            })
                        }
                    </ul>
                    <p><b>Total: {totalCalories()} cal</b></p>
                </div>
        </div>
        </div>
    )
}

export default Foods