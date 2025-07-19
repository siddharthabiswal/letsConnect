import { useState } from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";

import ImageCarousel from "../Carousel/ImageCarousel";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";

import "./Home.css";
import ContactList from "../ContactList/ContactList";
// ContactList
// import RegistrationForm from "../RegistrationForm/RegistrationForm";
// import DropDownMenuCheckBox from "../Common/DropDownMenuCheckBox/DropDownMenuCheckBox";
//import AdvertisementsPopUp from "../AdvertisementsPopUp/AdvertisementsPopUp";
//import UserForm from "../DataEntryDashboard/DataEntryDashboard";
//import FetchUsers from "../DataShowDashboard/DataShowDashboard";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="HomeContainer">

            <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
            <ImageCarousel />

            <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            <ServicesDisplay />
            <ContactList />
            {/* <DropDownMenuCheckBox /> */}

            {/* <AdvertisementsPopUp /> */}
            {/* <UserForm />
            <FetchUsers /> */}
        </div>
    );
};

export default Home;
