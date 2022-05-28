import { useState, useEffect } from 'react'
import Button from '../Button/Button'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [result, setResult] = useState(0)
    console.log(onAdd)
    useEffect(() => {
        // setCount(prev => prev + 1)
    }, [count])

    useEffect(() => {
        console.log('El componente fue montado')

        return () => {
            console.log('El componente va a desmontarse')
        }
    }, [])

    useEffect(() => {
        console.log('Se ejecuta despues del montaje y cuando actualiza count')
    }, [count])

    useEffect(() => {
        setResult(count * 2)
    }, [count])


    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const increment = () => {
        count < stock && setCount(count + 1)
    }

    const reset = () => {
        setCount(initial)
    }

    console.log('antes del montaje y en cada rerender (actualizacion)')
    return(
        <div>
            <h1>Count x 2: {result}</h1>
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            {/* <Button handleClick={reset}>reset</Button> */}
            <button onClick={() => onAdd()}>Agregar carrito</button>
        </div>
    )
}

export default Counter