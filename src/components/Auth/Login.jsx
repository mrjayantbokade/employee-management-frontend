import  { useState } from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';





const Login = ({handleLogin}) => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIcon, setPasswordIcon] = useState("show");
    const [privacy, setPrivacy] = useState("password");
    const passwordToggler = () => {
        setPrivacy((prevPrivacy) => (prevPrivacy === "password" ? "text" : "password"));
        setPasswordIcon(prevPasswordIcon => (prevPasswordIcon === "show" ? "hide" : "show"));


    };

    const submitHandler = (e) => {
        if(!email || !password){

            e.preventDefault()

            return alert("there should be email and password")
        }

        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }


    return (
        <div className={`max-w-2xl h-screen mt-44 m-auto flex  gap-6 flex-col w-fit bg-transparent text-center`}>
            <h1 className={`font-bold text-xl text-purple-600`}>Login into your account</h1>

            <div>
                <form onSubmit={submitHandler} className={`flex flex-col gap-6 p-10 text-sm  `}>

                    <div className={`rounded-xl border px-2 border-purple-700 w-64 `}>
                        <input
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            className={`bg-transparent py-2.5 px-2 w-full  font-medium outline-none `} placeholder={`username`} type="email"/>

                    </div>
                    <div className={`rounded-xl border px-2 border-purple-700 flex w-64 flex-row `}>
                        <input
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            className={`bg-transparent overflow-hidden py-2.5 px-2 w-full font-medium  outline-none rounded-xl`}
                            placeholder={`password`}
                            type={privacy}
                        />

                        <button
                            type="button"
                            className={`  text-md text-purple-700`}
                            onClick={passwordToggler}
                        >
                            {passwordIcon}

                        </button>
                    </div>
                    <button
                        onSubmit={(e)=> submitHandler(e)}
                        className={`bg-purple-800 hover:bg-purple-700 rounded-md py-1 px-4`}>submit</button>
                </form>
            </div>

        </div>
    )
}

export default Login