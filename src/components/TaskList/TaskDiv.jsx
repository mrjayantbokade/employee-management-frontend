

const TaskDiv = () => {


    return(
        <>
        <div className={` px-5 flex flex-row  flex-wrap sm:flex-nowrap gap-5 mx-auto `}>

            <div className={`bg-violet-600 w-[47%] p-3 rounded-xl `}>
                <h1 className={`text-4xl font-semibold`}>0</h1>
                <h2 className={`text-2xl font-semibold`}>New Task</h2>
            </div><div className={`bg-red-600 w-[47%] p-3 rounded-xl `}>
                <h1 className={`text-4xl font-semibold`}>0</h1>
                <h2 className={`text-2xl font-semibold`}>Assigned Task</h2>
            </div><div className={`bg-green-600 w-[47%] p-3 rounded-xl `}>
                <h1 className={`text-4xl font-semibold`}>0</h1>
                <h2 className={`text-2xl font-semibold`}>Completed Task</h2>
            </div><div className={`bg-yellow-600 w-[47%] p-3 rounded-xl `}>
                <h1 className={`text-4xl font-semibold`}>0</h1>
                <h2 className={`text-2xl font-semibold`}>New Task</h2>
            </div>
        </div>
        </>
    )
}

export default TaskDiv