import React, {useState} from "react"

function FoodBox(props) {

const {food, addToMenu} = props
const [quantity, setQuantity] = useState(1)
const handleQuantityChange = e => setQuantity(e.target.value)

const handleAddClick = () => {

    const foodData = {
        name: food.name,
        quantity: Number(quantity),
        calories: food.calories * quantity
    }

    addToMenu(foodData)
} 

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} alt = "food-pic" />
                </figure>
                </div>

                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                    </p>
                </div>
                </div>

                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input 
                        className="input" 
                        type="number" 
                        value = {quantity}
                        onChange = {handleQuantityChange}
                        />
                    </div>
                    <div className="control">
                    <button onClick = {handleAddClick} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox