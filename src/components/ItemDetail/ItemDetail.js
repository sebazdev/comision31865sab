import { useState } from 'react'

const InputCount = ({onAdd, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    
    const handleChange = (e) => {
        // if(e.target.value <= stock) {
            setCount(e.target.value)
        // }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(parseInt(count))}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(count + 1)
    }

    const decrement = () => {
        if(count > 0) setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, stock }) => {
    const [inputType, setInputType] = useState('button')

    const changeCount = () => {
        const input = inputType === 'button' ? 'input' : 'button'

        setInputType(input)
    }

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} ${name}`)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <>
            <h2>Card de detalle</h2>
            {name}
            <button onClick={changeCount}>Cambiar contador</button>
            {/* {inputType === 'button' 
                ? <ButtonCount onAdd={handleOnAdd} stock={stock}/>
                :  <InputCount onAdd={handleOnAdd} stock={stock}/>
            } */}
            
            <Count  onAdd={handleOnAdd} stock={stock} />
        </>
    )
}


export default ItemDetail