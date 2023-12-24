import {services} from '../../assets/services'
import './Services.scss'

const Services = () => {
    return (
        
        <div id="services" className="services-section">
            <h1 className="section-name">Our Services</h1>
            <div className="services">
                {services.map((item,i) => {return (
                    <div className="container" key={i}>
                        <img src={item.image} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                )})}
            </div>
        </div>
        
    )
}

export default Services