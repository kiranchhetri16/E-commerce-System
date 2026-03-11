import type { ReactNode } from "react"
import { Logo } from "../assets/img"
import CustomButton from "../components/CustomButton"
import { ArrowRight } from 'lucide-react';

interface Props{
    children:ReactNode
}

export const UserLayout:React.FC<Props> = ({children}) => {
    const NavMenu=[
        {id:1, name:"Homme", path:"/",},
        {id:2, name:"About Us", path:""},
        {id:3, name:"Contact Us", path:""}
    ]
  return (
    <>
    <div className="flex flex-col">
        
<div className=" flex justify-between items-center">
    <div className="size-6 p-1">
        <img src={Logo} className="w-full h-full"/>
    </div>
    <div className="flex items-center gap-6">
        {NavMenu.map((item)=>(
    <div key={item.name} className="flex items-center gap-2">
        <div className="text-base font-primary" onClick={()=>{item.path}}>{item.name}</div>
    </div>
    ))}
    <CustomButton variant="primary" to={"/"} className=""  icon={ <ArrowRight />}>Login </CustomButton>
</div>
</div>
<div className="custom-container">
<div className="w-full bg-danger">{children}</div>


    </div>
    <div></div>
    </div>
    </>
  )
}
