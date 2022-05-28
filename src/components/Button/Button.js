import './Button.css'

const Button = ({handleClick, children, otroComponent}) => {
    return <button onClick={handleClick}>{children}{otroComponent}</button>
}

export default Button