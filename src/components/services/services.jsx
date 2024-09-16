import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 export default function Services(){
    return (<>
    <div className="services w-full  max-w-[1000px]">
     <div className="services-header flex flex-col md:flex-row-reverse p-5 justify-center ">
     <div className="flex flex-1 items-center justify-center flex-col  ">
            <div className="w-full max-w-[500px] flex justify-center  flex-col gap-3">
            <div className="heading text-2xl font-bold  ">Get the Best Class By the Best Teachers</div>
             <p>Get your best class and gain the great 
                thing from the best and well quilified experienced teachers all
                 overthe word and get shinny. we are a unique traning provider
                  willing to give you all the skills and experience you need
                   to fulfil you future career</p>
                   <div className="p-3 flex items-center gap-3 bg-[#7ccdff] rounded text-sm w-[150px]">Read more<FontAwesomeIcon icon={faArrowRight} />
      
               </div>
            </div>
        </div>
        <div className="groupPhoto flex flex-1 ">
       <img className="w-[500px] h-auto object-cover" src="./src/assets/cards.png" alt="" srcset="" />
        </div>
        
     </div>

     <div className="service-items flex flex-col md:flex-row items-center justify-center gap-3">
     <div className="item flex flex-1 flex-col items-center p-6 gap-5  w-[400px] ">
         <div className="itemIcon w-[60px] h-auto"><img className="w-full h-auto object-cover" src="./assets/Icon-2.png" alt="" srcset="" /></div>
        
         <div className="itemHeading font-bold text-xl">Experienced Teachers</div>
         <div className="itemDescription">We teach in small groups with experienced ,supportive staff who are trained to understand some of the problems our students face</div>
        </div>
         <div className="item flex flex-1 flex-col items-center p-6 gap-5  w-[400px] ">
         <div className="itemIcon w-[60px] h-auto"><img className="w-full h-auto object-cover" src="./assets/Icon-1.png" alt="" srcset="" /></div>
      
         <div className="itemHeading font-bold text-xl">Progressive Learning</div>
         <div className="itemDescription">Our mission is to use our knowlege,skills and networks to equip people with multiple disadvantages with skills to gain and ustain employment</div>
         
        </div>
        <div className="item flex flex-1 flex-col items-center p-6 gap-5  w-[400px] ">
         <div className="itemIcon w-[60px] h-auto"><img className="w-full h-auto object-cover" src="./assets/Icon-2.png" alt="" srcset="" /></div>
      
         <div className="itemHeading font-bold text-xl">Graduate and get job</div>
         <div className="itemDescription">We teach in small groups with experienced ,supportive staff who are trained to understand some of the problems our students face</div>
         </div>
     </div>
    </div>
    </>)
 }