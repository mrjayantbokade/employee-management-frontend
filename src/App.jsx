import './App.css'
import Login from './components/Auth/Login.jsx'
import Header from "./components/others/Header.jsx";
import TaskDiv from "./components/TaskList/TaskDiv.jsx";

function App() {

  return (
    <>


        <div className={`bg-[#1c1c1c] h-screen`}>
            {/*<Login />*/}
            <Header/>
            <TaskDiv />
        </div>
    </>
  )
}

export default App
