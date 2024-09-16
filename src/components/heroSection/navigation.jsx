 
 export default function Navigation (){
return(<>
    <div className="flex w-full p-4 items-center">

    <div className="logo max-w-[150px] w-full">
        <img className="w-full h-full object-cover " src="./public/assets/logo.png" alt="Logo" srcset="" />
    </div>
    <div className="flex flex-1 bg-green-500">
    <div className="navLinks flex justify-center flex-1 ">
           <ul className=" flex list-none  text-sm h-full p-0 m-0 gap-3">
            <li>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Apparentships</li>
            <li>More</li>
           </ul>
    </div>
    <div className="signIn flex text-sm  items-center gap-3">
            <div>Sign up</div>
            <div className="rounded bg-[#2ea8d0] text-white px-4 py-1">Log in</div>

    </div>
    </div>
   

    </div>
</>)
 }