import { useState, useEffect } from "react"

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares').then(response => {
    //         return response.json()
    //     }).then(res => {
    //         setProducts(res.results)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])
    console.log(products)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then(response => {
            return response.json()
        }).then(res => {
            setProducts(res.results)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            <ul>
                {products.map(prod => {
                    return (
                        <li key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title}/>
                            <p>{prod.title}</p>
                            <p>{prod.price}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default MercadoLibre