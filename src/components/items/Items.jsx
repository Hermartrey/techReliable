
import './Items.scss'

const Items = (props) => {
    const {item} = props
    return (
        <div className="container">
            <img src={item.image} alt="" />
            <p>{item.desc}</p>
        </div>
    )
}

export default Items