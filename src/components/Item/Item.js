const Item = ({ name, img }) => {
    return (
        <li>
            <img src={img} alt={name}/>
            {name}
            <button>Ver detalle</button>
        </li>
    )
}

export default Item