import type { ReactNode } from "react"
import { AuthDesign, Logo } from "../assets/img/index"

interface Props{
    children:ReactNode
}

export const AuthLayout:React.FC<Props> = ({children}) => {
  return (
    <div className="w-full h-screen flex flex-col">
        <div className="size-16 pl-7.5 pt-5.75">
          <img className="w-full h-full" src={Logo} alt="" />
        </div>
        <div className=" w-screen h-[90vh] flex justify-center items-center max-[776px]:p-50  ">
            <div className="flex  justify-center border border-[#E4E4E7]">
          <div className="   rounded-xl  ">
            {children}
          </div>
          <div className=" w-125  ">
          <img
            className="object-contain rounded-r-lg h-full w-full"
            src={AuthDesign} 
            alt=""
          />
        </div>
        </div>
        </div>
    </div>
  )
}
