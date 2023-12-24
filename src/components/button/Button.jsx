import './Button.scss'

const Button = (props) => {
    return (
        <button className="btn" type="submit">
            {props.content}
        </button>
    )
}

export default Button