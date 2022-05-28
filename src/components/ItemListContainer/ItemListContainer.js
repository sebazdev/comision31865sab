import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    // const productsComponets = products.map(product => {
    //     return (
    //         <li key={product.id}>
    //             {product.name}
    //         </li>
    //     )
    // })

    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer