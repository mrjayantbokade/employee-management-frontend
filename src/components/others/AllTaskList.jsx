

const AllTaskList = () => {
    return (
        <>
            <div  className={`sm:max-w-3xl mx-auto  sm:h-[150px] h-[400px]  `}>
                <h1 className={`px-5 mt-5 text-2xl font-semibold text-emerald-400`}>All Tasks</h1>
                <div id={`tasklist`} className={`sm:h-[150px] h-[300px] overflow-y-auto`} >
                    <div className={`flex flex-row justify-between mx-5 px-5 text-lg mt-5 py-5 rounded-xl bg-emerald-400`}>
                        <h1>Task Tittle</h1>
                        <h2>Assigned to</h2>
                        <h1>10/11/2024</h1>

                    </div>  <div className={`flex flex-row justify-between mx-5 px-5 text-lg mt-5 py-5 rounded-xl bg-blue-400`}>
                        <h1>Task Tittle</h1>
                        <h2>Assigned to</h2>
                        <h1>10/11/2024</h1>

                    </div>  <div className={`flex flex-row justify-between mx-5 px-5 text-lg mt-5 py-5 rounded-xl bg-green-400`}>
                        <h1>Task Tittle</h1>
                        <h2>Assigned to</h2>
                        <h1>10/11/2024</h1>

                    </div>

                    <div className={`flex flex-row justify-between mx-5 px-5 text-lg mt-5 py-5 rounded-xl bg-indigo-400`}>
                        <h1>Task Tittle</h1>
                        <h2>Assigned to</h2>
                        <h1>10/11/2024</h1>

                    </div>

                    <div className={`flex flex-row justify-between mx-5 px-5 text-lg mt-5 py-5 rounded-xl bg-red-400`}>
                        <h1>Task Tittle</h1>
                        <h2>Assigned to</h2>
                        <h1>10/11/2024</h1>

                    </div>

                    <div className={`flex flex-row justify-between mx-5 px-5 text-lg mt-5 py-5 rounded-xl bg-purple-400`}>
                        <h1>Task Tittle</h1>
                        <h2>Assigned to</h2>
                        <h1>10/11/2024</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AllTaskList