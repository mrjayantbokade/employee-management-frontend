import './App.css';
import Login from './components/Auth/Login.jsx';
import Header from "./components/others/Header.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "./context/AuthProvider.jsx";

function App() {
    const data = useContext(AuthContext);

    // localStorage.clear()
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [localLoggedInUser, setLocalLoggedInUser] = useState(null);

    // Load the user from localStorage on component mount
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            setLocalLoggedInUser(loggedInUser);
            const role = (loggedInUser.email.split("@")[0]).replace(/\d+$/, '');
            setRole(role);
        }
    }, []);

    const findAndAuthenticateEmployee = (email, password) => {
        for (let i = 0; i < data.employees.employees.length; i++) {
            const userEmployee = data.employees.employees[i];
            if (email === userEmployee.email) {
                console.log("employee Found");

                if (password === userEmployee.password) {
                    setUser("employee");
                    setRole("employee");
                    localStorage.setItem("loggedInUser", JSON.stringify(userEmployee));
                    setLocalLoggedInUser(userEmployee); // Update localLoggedInUser immediately
                    return true;
                } else {
                    alert("Invalid password");
                    return false;
                }
            }
        }
        alert("Employee not found");
    }

    const handleLogin = async (email, password) => {
        const role = (email.split("@")[0]).replace(/\d+$/, '');
        console.log(role);

        if (role === "admin") {
            if (email === data.admin.admin.email && password === data.admin.admin.password) {
                const adminUser = data.admin.admin;
                setUser("admin");
                setRole("admin");
                localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
                setLocalLoggedInUser(adminUser); // Update localLoggedInUser immediately
            } else {
                alert("Invalid password");
            }
        } else if (role === "employee") {
            findAndAuthenticateEmployee(email, password);
        } else {
            alert("Invalid credentials");
        }
    }

    // console.log("HELLO DATA", data)
    // console.log("HELLO localLoggedInUser", localLoggedInUser)

    return (
        <div className="bg-[#1c1c1c] h-screen overflow-hidden">
            {!localLoggedInUser ? (
                <Login duludata={data} handleLogin={handleLogin} />
            ) : (
                role === "admin" ? (
                    <>
                        <Header data={data} localLoggedInUser={localLoggedInUser} />
                        <AdminDashboard data={data} localLoggedInUser={localLoggedInUser} />
                    </>
                ) : (
                    <>
                        <Header data={data} localLoggedInUser={localLoggedInUser} />
                        <EmployeeDashboard data={data} localLoggedInUser={localLoggedInUser} />
                    </>
                )
            )}
        </div>
    );
}

export default App;
