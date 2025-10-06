import { useState } from "react";
import "../RegistrationForm/RegistrationForm.css";
import { db } from "../../firebase";
import { arrayUnion, updateDoc, setDoc, doc, getDoc } from "firebase/firestore";
import Modal from "./Modal";

const RegistrationForm = ({ closeForm, defaultCategory }) => {
    const initialFormState = {
        userName: "",
        userPrimaryPhoneNumber: "",
        userSecondarPhoneyNumber: "",
        userServices: [],
        userLocality: [],
        category: defaultCategory || "",
    };

    const services = ["Plumbing", "Electrician", "Painter"];
    const localities = ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"];

    const [userForm, updateUserForm] = useState(initialFormState);

    // For modals
    const [showServiceModal, setShowServiceModal] = useState(false);
    const [showLocalityModal, setShowLocalityModal] = useState(false);

    async function handleSubmit(e) {
        // e.preventDefault();

        e.preventDefault();

        if (!defaultCategory) {
            alert("Category missing!");
            return;
        }

        // const docRef = doc(db, "users", "allUserEntries");

        const docRef = doc(db, "users", defaultCategory);

        try {
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                await setDoc(docRef, { entries: [] });
            }

            await updateDoc(docRef, {
                entries: arrayUnion({
                    ...userForm,
                    createdAt: new Date().toISOString(),
                }),
            });

            alert("User added successfully!");
            // updateUserForm(initialFormState);

            updateUserForm({
                ...initialFormState,
                category: defaultCategory, // keep category pre-filled
            });
            closeForm();
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

    // Toggle services
    const handleServiceToggle = (service) => {
        const updatedServices = userForm.userServices.includes(service)
            ? userForm.userServices.filter((s) => s !== service)
            : [...userForm.userServices, service];

        updateUserForm({ ...userForm, userServices: updatedServices });
    };

    // Toggle localities
    const handleLocalityToggle = (loc) => {
        const updatedLocalities = userForm.userLocality.includes(loc)
            ? userForm.userLocality.filter((l) => l !== loc)
            : [...userForm.userLocality, loc];

        updateUserForm({ ...userForm, userLocality: updatedLocalities });
    };

    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <h1 style={{ textAlign: "center" }}>I am the form</h1>
                <label htmlFor="category">Category:</label>
                <input
                    name="category"
                    id="category"
                    value={userForm.category}
                    onChange={handleInputsChange}
                    readOnly
                />

                <label htmlFor="userName">Name:</label>
                <input
                    name="userName"
                    id="userName"
                    value={userForm.userName}
                    onChange={handleInputsChange}
                />

                <label htmlFor="userPrimaryPhoneNumber">Phone Number:</label>
                <input
                    name="userPrimaryPhoneNumber"
                    id="userPrimaryPhoneNumber"
                    value={userForm.userPrimaryPhoneNumber}
                    onChange={handleInputsChange}
                />

                <label htmlFor="userSecondarPhoneyNumber">Alternate Number:</label>
                <input
                    name="userSecondarPhoneyNumber"
                    id="userSecondarPhoneyNumber"
                    value={userForm.userSecondarPhoneyNumber}
                    onChange={handleInputsChange}
                />

                {/* Services Modal Trigger */}
                {/* <label>Select Services</label> */}
                <div
                    className="customDropdown"
                    onClick={() => setShowServiceModal(true)}
                >
                    {userForm.userServices.length > 0
                        ? userForm.userServices.join(", ")
                        : "Select services"}
                </div>

                {/* Localities Modal Trigger */}
                {/* <label>Select Localities</label> */}
                <div
                    className="customDropdown"
                    onClick={() => setShowLocalityModal(true)}
                >
                    {userForm.userLocality.length > 0
                        ? userForm.userLocality.join(", ")
                        : "Select localities"}
                </div>

                <button type="submit">Submit</button>
            </form>

            {/* Services Modal */}
            <Modal
                isOpen={showServiceModal}
                onClose={() => setShowServiceModal(false)}

            >
                <div className="serviceList">
                    {services.map((service, index) => (
                        <label key={index} className="serviceItem">
                            <input
                                type="checkbox"
                                checked={userForm.userServices.includes(service)}
                                onChange={() => handleServiceToggle(service)}
                            />
                            {service}
                        </label>
                    ))}
                </div>
                <button onClick={() => setShowServiceModal(false)}>Done</button>
            </Modal>

            {/* Localities Modal */}
            <Modal
                isOpen={showLocalityModal}
                onClose={() => setShowLocalityModal(false)}
                title="Select Localities"
            >
                <div className="modalList">
                    {localities.map((loc, index) => (
                        <div key={index} className="modalListItem">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={userForm.userLocality.includes(loc)}
                                    onChange={() => handleLocalityToggle(loc)}
                                />
                                {loc}
                            </label>
                        </div>
                    ))}
                </div>
                <button onClick={() => setShowLocalityModal(false)}>Done</button>
            </Modal>
        </div>
    );
};

export default RegistrationForm;
