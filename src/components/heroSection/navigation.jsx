import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
 
 export default function Navigation (){
    const[value,setValue]=useState(true)
    const handler =()=>{
setValue((pre)=>{
    return pre?false:true
})
    }
return(<>
    <div className="flex w-full p-4 items-center relative">

    <div className="logo max-w-[150px] w-full">
        <img className="w-full h-full object-cover " src="./assets/Logo.png" alt="Logo" srcset="" />
    </div>
    <div className={` flex-1 shadow-xl ${value?'hidden':'flex'} md:flex z-10 bg-white md:shadow-none border md:border-none md:relative absolute top-[60px] md:top-0 p-5 gap-5  right-0  flex-col md:flex-row `}>
    <div className="navLinks flex justify-center md:items-center flex-1 md:flex-row flex-col  text-sm md:gap-5 gap-3 ">
            <div>Home</div>
            <div>About us</div>
            <div>Courses</div>
            <div>Apparentships</div>
            <div>More</div>
    </div>
    <div className="signIn flex text-sm  items-center gap-3">
            <div>Sign up</div>
            <div className="rounded bg-[#2ea8d0] text-white px-4 py-1">Log in</div>

    </div>
    </div>

    <div onClick={handler} className="mr-auto md:hidden absolute right-[20px] top-15"><FontAwesomeIcon icon={faBars} size="lg" /></div>
   

    </div>
</>)
 }