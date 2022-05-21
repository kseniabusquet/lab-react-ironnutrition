import React, {useState} from "react";
import foodData from "../foods.json"
import FoodBox from "./FoodBox"
import FoodForm from "./FoodForm";
import Search from "./Search";
import './Foods.css';

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
        const updatedMenu = [...menu]

        const found = menu.find(element => {
            return element.name === foodData.name
        })

        if (found) {
            found.quantity += foodData.quantity
            found.calories += foodData.calories
        } else {
            updatedMenu.push(foodData)
        }
        
        setMenu(updatedMenu)
    }

    const totalCalories = () => {
        return menu.reduce((acc, val) => {
            return acc + val.calories
        }, 0)
    }

    const removeItem = (food) => {
        const newMenu = [...menu]
        const index = newMenu.findIndex((el) => {
           return el.name === food.name
        })
        newMenu.splice(index, 1)
        setMenu(newMenu)

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
                                return (
                                <div className = "todayFood">
                                    <li>{food.quantity} {food.name} = {food.calories} cal</li>
                                    <button className = "button is-light is-danger" onClick = {() => removeItem(food)}>
                                    Remove 🗑️
                                    </button>
                                </div>
                                )
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