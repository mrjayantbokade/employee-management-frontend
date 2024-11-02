import TaskDiv from "../TaskList/TaskDiv.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import AllTaskList from "../others/AllTaskList.jsx";
import CreateTask from "../others/CreateTask.jsx";


const AdminDashboard = () => {

    return (
        <>

            <CreateTask/>
            <AllTaskList />
        </>
    )
}

export default AdminDashboard