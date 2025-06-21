import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // your firebase config file




import { useEffect, useState } from "react";

const FetchUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                const usersList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUsers(usersList);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            📞 {user.phone} — 👤 {user.name}, 🏠 {user.address}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchUsers;
