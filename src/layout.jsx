import React from "react";

export default function Layout({children}){
return(<>
<div className="flex flex-col w-full h-full gap-20 items-center">
  {children}
</div>
</>)
}