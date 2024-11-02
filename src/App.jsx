import './App.css'
import Login from './components/Auth/Login.jsx'
import Header from "./components/others/Header.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";

function App() {

  return (
    <>


        <div className={`bg-[#1c1c1c] h-screen overflow-hidden`}>
            {/*<Login />*/}
            <Header/>
            {/*<EmployeeDashboard/>*/}
            <AdminDashboard/>
        </div>
    </>
  )
}

export default App
