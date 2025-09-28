import CategoryGrid from '../CategoryGrid/CategoryGrid';
import './ServicesDisplay.css'

const ServicesDisplay = ({ categories }) => {

    return (
        <div className='serviceDisplay'>Let's Connect to your service provider
            <CategoryGrid categories={categories} />

        </div>
    )
}


export default ServicesDisplay;