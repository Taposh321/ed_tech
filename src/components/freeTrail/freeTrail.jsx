export default function FreeTrail(){
    return (<>
    <div className="trailContainer relative w-full max-w-[1000px]   flex  flex-col md:flex-row justify-center items-center pl-[20px] gap-10">
        <div className="trailWrapper  flex w-full justify-center md:justify-start ">
            <div className="flex flex-col  gap-3">
                <div className="text-sm text-[gray]">GREAT LEARNING PLATFORM</div>    
        <div className="trailHeading w-full max-w-[400px] font-bold text-4xl">
            A quality place for distance learning
        </div>
        <div className="trailText w-full max-w-[300px]">
            A best and cheapest way of getting known learning to make abetter tommorow
        </div>
        <div className="trailButton p-3 bg-[#49cff1] rounded-sm w-[150px]">Start Free Trail</div></div>
   
        </div>
    <div className="trailPhoto  w-full flex justify-center  ">
        
      <div className="trailPhotowrapper  relative w-[300px] h-[350px] rounded-sm  ">
      <div className="absolute w-[80px] h-[80px] top-[-30px] left-[-40px] z-10">
            <img className="w-full h-full object-cover" src="./assets/Vector.png" alt="" />
        </div>
        <img className="w-full h-full object-cover z-20 absolute" src="./assets/Images.png" alt="" />
      </div>

    </div>
     <div className="absolute bottom-[-50px] left-0 w-[100px]">
      <img className="w-full h-full " src="./assets/newsletter2.png" alt="" />
     </div>
    </div>
    </>)
}