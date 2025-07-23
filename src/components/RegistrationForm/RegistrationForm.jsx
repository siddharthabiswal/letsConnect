import { useState } from "react";

import "../RegistrationForm/RegistrationForm.css";
//import DropDownMenuCheckBox from "../Common/DropDownMenuCheckBox/DropDownMenuCheckBox";
import DropDownMenu from "../Common/DropDownMenu/DropDownMenu";
import { db } from "../../firebase";
import { arrayUnion, updateDoc, setDoc, doc, getDoc } from "firebase/firestore";
// import { servicesList } from "../../data/servicesList";
// import { localityList } from "../../data/localityList";



const RegistrationForm = ({ closeForm }) => {
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

    async function handleSubmit(e) {
        e.preventDefault();
        const docRef = doc(db, "users", "allUserEntries");

        // One document for all entries

        // 



        try {
            // 1. Check if the document exists
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                // 2. Create the document with an empty array first
                await setDoc(docRef, { entries: [] });
            }

            // 3. Use arrayUnion to append to the array
            await updateDoc(docRef, {
                entries: arrayUnion({
                    ...userForm,
                    createdAt: new Date().toISOString()  // optional timestamp
                }),
            });

            alert("User added successfully!");
            updateUserForm(initialFormState); // Reset form
        } catch (error) {
            console.error("Error adding entry:", error);
            alert("Error saving data.");
        }
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
        <div className="formContainer ">
            <form className="form" onSubmit={handleSubmit}>
                {/* <button type="button" onClick={closeForm} className="closeBtn">×</button> */}
                <h1 style={{ textAlign: "center" }}>I am the form</h1>
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

                <DropDownMenu
                    label="Select Servicess"
                    options={services}
                    value={userForm.userServices}
                    onChange={handleDropdownChange}
                    name="userServices"
                />

                <DropDownMenu
                    label="Select localities"
                    options={localities}
                    value={userForm.userLocality}
                    onChange={handleDropdownChange}
                    name="userLocality"
                />

                <DropDownMenu
                    label="Select localities"
                    options={localities}
                    value={userForm.userLocality}
                    onChange={handleDropdownChange}
                    name="userLocality"
                />

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
