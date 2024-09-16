import Navigation from "./navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Hero(){
  return(<>
   <section className="heroSection flex flex-col h-[100%] w-full min-h-[400px]">
     <Navigation />
     <div className="heroContent gap-10 md:gap-0  flex flex-1 flex-col md:flex-row ">
      <div className="heroTextContainer overflow-hidden relative flex flex-col gap-3 flex-1 min-h-[400px] md:min-h-[100%]  justify-center pl-5">
        <div className=" text-[#413d3d]">TRAINING TO SUCCEED</div>
        <div className="heroHead text-4xl md:text-5xl  text-[#413d3d] font-bold max-w-[500px] ">
            Believe and you can achieve
        </div>

        <div className="heroText max-w-[400px] text-sm">
            Learn any skill from comfort of your home 
            Anywhere and Anytime for only $10
        </div>
        <div className="cta bg-[#48d1ff] w-[130px] flex items-center justify-center gap-2 p-2 text-white  text-sm rounded ">
            Apply now <FontAwesomeIcon icon={faArrowRight} size='lg' />
        </div>

        {/* vectors */}
        <div className="absolute w-full h-full z-10">  
        <img  className="absolute left-[-150px] top-[-30px] rotate-[-45deg] z-20 h-[200px] w-[200px]" src="./assets/circleLine.png" alt="" srcset="" />
        <div className="absolute w-[40px] h-[40px] bottom-[10px] bg-yellow-400 z-10"></div>
        <div className="absolute w-[40px] h-[40px] left-[-10px] bottom-[5px] border border-black z-0"></div>

        <img  className="absolute right-0 bottom-[10px] z-10 w-[90px]" src="./assets/Group-1.png" alt="" srcset="" />
        <img  className="absolute right-[100px] bottom-[60px] z-10 w-[50px]" src="./assets/Group-0.png" alt="" srcset="" />
       <img  className="absolute right-0 bottom-[50px] z-10 w-[100px]" src="./assets/Group-2.png" alt="" srcset="" />
        <img  className="absolute right-[100px] bottom-[0px] z-10 w-[100px]" src="./assets/Group-2.png" alt="" srcset="" />
        <img  className="absolute right-0 bottom-0 z-10 w-[100px]" src="./assets/Group.png" alt="" srcset="" />
       
        </div>

      </div>
      <div className="heroPhotoContainer overflow-hidden  relative flex flex-1  justify-center md:justify-end items-center">
        <div className="heroPhoto max-w-[350px] md:max-w-[500px] h-auto ">
        <img className="w-full h-full object-cover"  src="./assets/heroPhoto.png"  alt="" />
        </div>
        <div className="absolute w-[100px] h-[100px] rounded-full right-[-50px] top-[200px] border border-black z-0"></div>
        <div className="absolute w-[80px] h-[80px] rounded-full bg-[#3dd3c2] right-[-40px] top-[210px] border  z-0"></div>
      </div>
     
     {/* Vectore icons */}

     </div>

    </section>
    </> )

}