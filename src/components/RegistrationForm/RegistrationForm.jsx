import { useState } from "react";

import "../RegistrationForm/RegistrationForm.css";
import DropDownMenuCheckBox from "../Common/DropDownMenuCheckBox/DropDownMenuCheckBox";
import DropDownMenu from "../Common/DropDownMenu/DropDownMenu";
// import { servicesList } from "../../data/servicesList";
// import { localityList } from "../../data/localityList";
const RegistrationForm = () => {
    const initialFormState = {
        userName: "",
        userPrimaryPhoneNumber: "",
        userSecondarPhoneyNumber: "",
        userServices: [],
        userLocality: [],
    };
    const services = ["Plumbing", "Electrician", "Painter"];
    const localities = ["Bhubaneswar", "Cuttack", "Rourkela"];
    const [userForm, updateUserForm] = useState(initialFormState);

    function handleSubmit(params) {
        console.log("sbtm click");
    }

    function handleInputsChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        updateUserForm({ ...userForm, [name]: value });
    }

    const handleDropdownChange = (selected, fieldName) => {
        updateUserForm({ ...userForm, [fieldName]: selected });
    };


    return (
        <div className="formConatiner">
            <form className="form">
                <h1>I am the form</h1>
                <label htmlFor="userName">Name:</label>
                <input
                    name="userName"
                    id="userName"
                    value={userForm.userName}
                    onChange={handleInputsChange}
                ></input>
                <label htmlFor="userPrimaryPhoneNumber">Phone Number:</label>
                <input
                    name="userPrimaryPhoneNumber"
                    id="userPrimaryPhoneNumber"
                    value={userForm.userPrimaryPhoneNumber}
                    onChange={handleInputsChange}
                ></input>
                <label htmlFor="userSecondarPhoneyNumber">Alternate Number:</label>
                <input
                    name="userSecondarPhoneyNumber"
                    id="userSecondarPhoneyNumber"
                    value={userForm.userSecondarPhoneyNumber}
                    onChange={handleInputsChange}
                ></input>

                {/* <DropDownMenuCheckBox /> */}

                <DropDownMenu label="Select Servicess"
                    options={services}
                    value={userForm.userServices}
                    onChange={handleDropdownChange}
                    name="userServices" />


                <label htmlFor="userLocality">Active in locality:</label>
                <input
                    name="userLocality"
                    id="userLocality"
                    value={userForm.userLocality}
                    onChange={handleInputsChange}
                ></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>

            {userForm.userServices}
        </div>
    );
};

export default RegistrationForm;
