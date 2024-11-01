import  { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';





const Login = () => {

    const submitHandler = (e) => {
        e.preventDefault()
    }


    const [passwordIcon, setPasswordIcon] = useState("show");
    const [privacy, setPrivacy] = useState("password");
    const passwordToggler = () => {
        setPrivacy((prevPrivacy) => (prevPrivacy === "password" ? "text" : "password"));
        setPasswordIcon(prevPasswordIcon => (prevPasswordIcon === "show" ? "hide" : "show"));


    };

    return (
        <div className={`max-w-2xl h-screen mt-44 m-auto flex  gap-6 flex-col w-fit bg-transparent text-center`}>
            <h1 className={`font-bold text-xl text-purple-600`}>Login into your account</h1>
            <form   onSubmit={submitHandler} className={`flex flex-col gap-6 p-10 text-sm  `}>

                <div className={`rounded-xl border border-purple-700 w-64 `}>
                    <input className={`bg-transparent py-2.5 px-2 w-full  font-medium outline-none `} placeholder={`username`} type="email"/>

                </div>
                <div className={`rounded-xl border border-purple-700 flex w-64 flex-row `}>
                    <input
                        className={`bg-transparent overflow-hidden py-2.5 px-2  font-medium  outline-none rounded-xl`}
                        placeholder={`password`}
                        type={privacy}
                    />

                    <button
                        type="button"
                        className={`  text-md z-10 text-purple-700`}
                        onClick={passwordToggler}
                    >
                        {passwordIcon}

                    </button>
                </div>
                <button className={`bg-purple-800 hover:bg-purple-700 rounded-md py-1 px-4`}>submit</button>
            </form>

            <FontAwesomeIcon className="text-white text-md" icon="fa-solid {passwordIcon}"/>
        </div>
    )
}

export default Login