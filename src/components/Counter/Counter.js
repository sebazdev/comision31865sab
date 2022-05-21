import { useState } from 'react'
import Button from '../Button/Button'

const Counter = ({initial, stock, title}) => {
    // const {initial, title} = props
    const [count, setCount] = useState(initial)

    const decrement = () => {
        // setCount(count - 1)
        for(let i = 0; i < 2; i++) {
            // setCount(count - 1)
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        // if(count < stock) {
        //     setCount(count + 1)
        // }

        (count < stock && true) && setCount(count + 1)
    }

    const reset = () => {
        setCount(initial)
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={decrement}>-</button>
            {/* <Button handleClick={() => console.log('restar')} label='-'/> */}
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            {/* <Button handleClick={() => console.log('Sumar')} label='+' /> */}
            {/* <button onClick={reset}>reset</button> */}
            <Button onClick={reset}><h1>REST</h1></Button>
        </div>
    )
}

export default Counter