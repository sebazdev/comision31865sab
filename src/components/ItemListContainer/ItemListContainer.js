import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            {/* <ItemList /> */}
        </div>
    )
}

export default ItemListContainer