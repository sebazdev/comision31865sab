import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"

import { useNotification } from "../../notification/Notification"

import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, totalQuantity, getTotal, clearCart } = useContext(CartContext)
    
    const total = getTotal()

    const setNotification = useNotification()

    const handleCreateOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Sebastian Zuviria',
                email: 'seba@zuv.com',
                phone: '123456789',
                address: 'Direccion 123'
            },
            items: cart,
            total: total
        }

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                setNotification('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)
            }).catch(error => {
                if(error.type === 'out_of_stock') {
                    setNotification('error','Hay productos que no tienen stock')

                } else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })

    }

    // const handleUpdateStock = () => {
    //     const docRef = doc(db, 'products', 'UhQsaWPNkWSOqT9jOAWm')

    //     updateDoc(docRef, { stock: 1000 })
    // }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(totalQuantity === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    return (
        <>
            <h1>Cart</h1>
            <CartItemList productsAdded={cart}/>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button onClick={handleCreateOrder} className="Button">Generar Orden</button>
            {/* <button onClick={handleUpdateStock} className="Button">Stock 1000</button> */}
        </>
    )
}

export default Cart