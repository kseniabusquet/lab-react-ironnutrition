import React, {useState} from "react";
import foodData from "../foods.json"
import FoodBox from "./FoodBox"

function Foods(){
    const [foods, setFoods] = useState(foodData)

    return(
        <div>
            <h1>IronNutrition</h1>
            <button className="button">Add food</button>
            <div className = "columns">
                <div className = "column">
                {
                    foods.map(food => {
                        return <FoodBox food = {food} />
                    })
                }


                <FoodBox food = {foodData[3]}/>
                </div>

                <div className = "column"></div>
            </div>
        </div>
    )
}

export default Foods