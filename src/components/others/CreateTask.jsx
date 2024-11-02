import taskDiv from "../TaskList/TaskDiv.jsx";

const CreateTask = () => {
    return (
        <>


            <div className={`w-screen  mx-auto `}>
                <div className={` px-5 w-screen sm:max-w-3xl mx-auto h-[400px]  `}>

                    <div>
                        <h3 className={`text-lg`}>
                            Task Title
                        </h3>
                        <input className={`border bg-slate-500/5 border-gray-600  rounded-lg px-2 py-1  w-full mt-2`} type="text"/>

                        <h3 className={`text-lg`}>
                            Date
                        </h3>

                        <input className={`border bg-slate-500/5 border-gray-600  rounded-lg px-2 py-1 `} type="Date"/>
                        <h3 className={`text-lg`}>
                            Asign to
                        </h3>
                        <input className={`border bg-slate-500/5 border-gray-600  rounded-lg px-2 py-1  w-full mt-2 `} type="text"/>

                        <h3 className={`text-lg`}>
                            category
                        </h3>
                        <input className={`border bg-slate-500/5 border-gray-600  rounded-lg px-2 py-1  w-full mt-2 `} type="text"/>

                    </div>

                    <div className={`flex flex-col  `}>
                        <h3 className={`text-lg`}>
                            Description
                        </h3>
                        <input className={`border bg-slate-500/5 border-gray-600  rounded-lg px-2 py-1  w-full  mt-2`} type="text"/>

                        <button className={`bg-purple-600 text-white text-lg rounded-lg px-2 py-1 mt-4 w-fit`}>
                            Create ->
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default CreateTask