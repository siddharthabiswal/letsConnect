import { useState } from "react";

import "../RegistrationForm/RegistrationForm.css";
import DropDownMenuCheckBox from "../Common/DropDownMenuCheckBox/DropDownMenuCheckBox";
// import { servicesList } from "../../data/servicesList";
// import { localityList } from "../../data/localityList";
const RegistrationForm = () => {
    const initialFormState = {
        userName: "",
        userPrimaryPhoneNumber: "",
        userSecondarPhoneyNumber: "",
        userServices: "",
        userLocality: "",
    };

    const [userForm, updateUserForm] = useState(initialFormState);

    function handleSubmit(params) {
        console.log("sbtm click");
    }

    function handleInputsChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        updateUserForm({ ...userForm, [name]: value });
    }

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

                <DropDownMenuCheckBox />


                <label htmlFor="userLocality">Active in locality:</label>
                <input
                    name="userLocality"
                    id="userLocality"
                    value={userForm.userLocality}
                    onChange={handleInputsChange}
                ></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>

            {userForm.userName}
        </div>
    );
};

export default RegistrationForm;
