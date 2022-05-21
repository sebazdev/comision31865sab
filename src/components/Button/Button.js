import './Button.css'

const Button = (props) => {
    console.log(props)
    return <button onClick={props.handleClick}>{props.children}</button>
}

export default Button