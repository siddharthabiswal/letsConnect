import { useState } from "react";

import "../RegistrationForm/RegistrationForm.css";
import { servicesList } from "../../data/servicesList";
import { localityList } from "../../data/localityList";

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
                <input
                    name="userName"
                    value={userForm.userName}
                    onChange={handleInputsChange}
                ></input>
                <input
                    name="userPrimaryPhoneNumber"
                    value={userForm.userPrimaryPhoneNumber}
                    onChange={handleInputsChange}
                ></input>
                <input
                    name="userSecondarPhoneyNumber"
                    value={userForm.userSecondarPhoneyNumber}
                    onChange={handleInputsChange}
                ></input>
                <input
                    name="userServices"
                    value={userForm.userServices}
                    onChange={handleInputsChange}
                ></input>

                <input
                    name="userLocality"
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
