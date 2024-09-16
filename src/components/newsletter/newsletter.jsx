import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Newsletter(){
     const [value,setValue]=useState('')

    const handler=(e)=>{
         setValue(()=> e.target.value )
    }
    return (<>
    <div className="flex flex-col sm:flex-row w-full max-w-[1000px] bg-[#7aeafb] pl-[20px]">
        <div className="flex   min-h-[100px] w-full items-center  ">
           <div className="flex flex-col gap-2 w-full ">
            <span className="text-sm text-[gray] tracking-wider">Newsletter</span>
            <div className="newsletterHeading text-3xl">
              Subscribe To Our Newsletter
            </div>
            <div className="bg-white text-sm  w-[300px] flex items-center justify-between">
                <input className="p-2 flex-1 outline-none" value={value} onChange={handler} type="email" placeholder="Enter your Email"/>
            <button className="bg-[#3f02f4] text-white px-4 py-2 text-center" ><FontAwesomeIcon icon={faArrowRight} size="sm" /></button>
            </div>
            </div>
            
        </div>
        <div  className="w-full  flex justify-center items-center ">
            <div className="w-[300px] h-[300px] ">
                <img className="w-full h-full object-cover" src="./assets/newsletter.png" alt="" srcset="" />
            </div>
        </div>
    </div>
    </>)
}