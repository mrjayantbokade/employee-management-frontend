import './App.css'
import Login from './components/Auth/Login.jsx'
import Header from "./components/others/Header.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "./context/AuthProvider.jsx";

function App() {


    const [user, setUser] = useState(null);
    const data = useContext(AuthContext);


    const findAndAuthenticateEmployee = (email, password) => {

        // const employeeArray = data.employees.employees

        // this logic is for only the local storage. This is not search efficient in real time and lots of data



        for (let i=0;  i< data.employees.employees.length; i++) {

            const userEmployee = data.employees.employees[i]

            if (email === userEmployee.email) {
                console.log("employee Found")

                const localStoragePassword = userEmployee.password
                if (password === localStoragePassword) {
                    setUser("employee")
                    return true
                } else {
                    alert("invalid password")
                    return false

                }


            }

        }

        alert("Employee not found")

    }


    const handleLogin = async (email, password) => {

        const role = (email.split("@")[0]).replace(/\d+$/, '');
        console.log(role)

        if (role === "admin") {

            if (email === data.admin.admin.email && password === data.admin.admin.password) {
                setUser("admin")

            }else {
                alert("invalid password")
            }

        } else if (role === "employee") {

            findAndAuthenticateEmployee(email, password)

        } else {
            alert("invalid credentials")

        }

    }


    return (
        <>


            <div className={`bg-[#1c1c1c] h-screen overflow-hidden`}>
                {!user ? <Login handleLogin={handleLogin}/> : ""}


                {user === "admin" ? <div>
                    <Header/>
                    <AdminDashboard/>
                </div> : ''}


                {user === "employee" ? <div>
                    <Header/>
                    <EmployeeDashboard/>
                </div> : ''
                }
            </div>
        </>
    )
}

export default App
