import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    //Este id proviene de la url
    const { categoryId } = useParams()

    
    useEffect(() => {
        const onResize = () => {
            console.log('cambio tamaño')
        }

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    useEffect(() => {
        setLoading(true)

        if(!categoryId) {
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1>{props.greeting}</h1>
            {products.length > 0 
                ? <ItemList products={products}/>
                : <h1>No hay productos</h1>
            }
        </div>
    )
}

export default ItemListContainer