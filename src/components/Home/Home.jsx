import ImageCarousel from '../Carousel/ImageCarousel';
import Header from '../Header/Header';
import ServicesDisplay from '../ServicesDisplay/ServicesDisplay';
import SideMenu from '../SideMenu/SideMenu';
import './Home.css'



const Home = () => {

    return (
        <div className="HomeContainer">
            <Header />

            <ServicesDisplay />
            <ImageCarousel />
        </div>
    )

}

export default Home;