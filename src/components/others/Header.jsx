

const Header = ({data, localLoggedInUser}) => {

    console.log(localLoggedInUser)

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser")
        window.location.reload()
    }
    return (
       <>

           <div className={` flex justify-between p-5 items-center `}>
               <h3>
                   hello,
                   <h1 className={`font-bold text-3xl`}>
                       {localLoggedInUser.email.split("@")[0]}
                   </h1>
               </h3>
               <button onClick={handleLogout} className={`bg-red-600 h-fit px-2 py-0.5 rounded text-white`}>
                   logout
               </button>
           </div>

       </>
    )
}


export default Header