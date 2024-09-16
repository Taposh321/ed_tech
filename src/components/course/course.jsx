import { faDisplay, faFileText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Course(){
    return(<>
    <div className="courseContainer pl-[20px] flex flex-col gap-10 w-full  max-w-[1000px]">
         <div className="courseHeadingContainer  flex flex-col gap-3  ">
            <div className="courseHeading font-bold text-2xl">
            Featured Course
            </div>
            <div className="text-sm text-[gray]">
                Our best selling courses

            </div>
             </div>
        <div className="courseWrapper flex flex-col items-center gap-5 md:flex-row w-full">
       
            <div className="courseItem flex flex-col">
             <div className="coursePhoto w-full max-w-[400px]">
                <img className="w-full h-auto" src="./src/assets/image.png" alt="" />
             </div>
             <div className="courseDiscription flex flex-col gap-2">
                <div className="courseTitle font-bold">
                    A Complete Web development
                </div>
                <div className="text-sm text-[gray]">Technology &gt; Web development</div>
               <div className="pricing text-sm flex gap-3">
                <span>$450</span> 
                <span> <FontAwesomeIcon icon={faDisplay} /> 23.5 Hours</span>
                <span> <FontAwesomeIcon icon={faFileText}  />  52 Articles</span>
               </div>
             </div>
            </div>
            <div className="courseItem flex flex-col">
             <div className="coursePhoto w-full max-w-[400px]">
                <img className="w-full h-auto" src="./src/assets/image-1.png" alt="" />
             </div>
             <div className="courseDiscription flex flex-col gap-2">
                <div className="courseTitle font-bold">
                   Music Production Cousrse
                </div>
                <div className="text-sm text-[gray]">Technology &gt; Web development</div>
               <div className="pricing text-sm flex gap-3">
                <span>$320</span> 
                <span> <FontAwesomeIcon icon={faDisplay} /> 15.5 Hours</span>
                <span> <FontAwesomeIcon icon={faFileText}  />  27 Articles</span>
               </div>
             </div>
            </div>
            <div className="courseItem flex flex-col">
             <div className="coursePhoto w-full max-w-[400px]">
                <img className="w-full h-auto" src="./src/assets/image-2.png" alt="" />
             </div>
             <div className="courseDiscription flex flex-col gap-2">
                <div className="courseTitle font-bold">
                   Personal Development Course
                </div>
                <div className="text-sm text-[gray]">Personal development</div>
               <div className="pricing text-sm flex gap-3">
                <span>$620</span> 
                <span> <FontAwesomeIcon icon={faDisplay} /> 33.5 Hours</span>
                <span> <FontAwesomeIcon icon={faFileText}  />  37 Articles</span>
               </div>
             </div>
            </div>
        </div>
    </div>
    </>)
}