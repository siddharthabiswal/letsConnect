import { useState } from "react";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { phone, name, address } = formData;

        if (!phone || !name || !address) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            // Use phone number as the document ID
            await setDoc(doc(db, "users", phone), {
                name,
                address,
                phone,
            });

            alert("Data submitted successfully!");
            setFormData({ name: "", address: "", phone: "" });
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "300px",
    margin: "auto",
    marginTop: "2rem",
};

export default UserForm;
