import TaskDiv from "../TaskList/TaskDiv.jsx";
import TaskList from "../TaskList/TaskList.jsx";

const EmployeeDashboard = ({data, localLoggedInUser}) => {

    return (
        <>
            <TaskDiv />
            <TaskList />
        </>
    )

}

export default EmployeeDashboard