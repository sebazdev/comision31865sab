import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav style={{ display: 'flex'}}>
            <h3>Ecommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebook</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar