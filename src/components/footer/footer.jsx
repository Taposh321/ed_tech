export default function Footer(){
    return(<>
    <div className="w-full pl-[20px]  flex justify-center">
      <div className="w-full max-w-[1000px] py-5 flex justify-around">
       <div className="pages flex flex-col gap-2 text-sm">
        <div className="font-bold">Pages</div>
         <div>Home</div>
         <div>About us</div>
         <div>Courses</div>
         <div>Blog</div>
       </div>
       <div className="pages flex flex-col gap-2 text-sm">
        <div className="font-bold">Resources</div>
         <div>Our Homes</div>
         <div>Member stories</div>
         <div>Video</div>
         <div>Free trial</div>
       </div>
       <div className="pages flex flex-col gap-2 text-sm">
        <div className="font-bold">Company</div>
         <div>Partnerships</div>
         <div>Term of use</div>
         <div>Privacy</div>
         <div>Sitemap</div>
       </div>
      </div>
    </div>
    </>)
}