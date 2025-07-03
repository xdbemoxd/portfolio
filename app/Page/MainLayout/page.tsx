import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const imageStyle = {
  borderRadius: '50%',
  border: '5px solid #fff',
}


export default function LayoutMain() {

    return(
        <div className="flex flex-center justify-center w-screen bg-blue-300/70 mb-15 max-sm:flex max-sm:justify-start max-sm:mb-4">
                <div className="p-1">
                    <Image src={"/fotoPerfil.jpg"} alt="Foto de benjamin" width={140} height={190} style={imageStyle} className="max-sm:w-20 max-sm:h-20"/> 
                </div>
                
                <div className="flex-col justify-center pl-2 max-sm:">
                    <p className="text-3xl italic font-semibold pt-6 max-sm:text-xl">Benjamin Marroquin</p>
                    <div className="bottom-1 snap-center pt-8 justify-between">
                        
                        <Breadcrumb>

                            <BreadcrumbList>
                        
                                <BreadcrumbItem>
                        
                                    <BreadcrumbPage> <Link href={"/"}> <p className="text-2xl italic font-normal max-sm:text-xs">Home</p> </Link> </BreadcrumbPage>
                        
                                </BreadcrumbItem>
                        
                                <BreadcrumbSeparator />
                        
                                <BreadcrumbItem>
                        
                                    <DropdownMenu>
                                        
                                        <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 text-2xl italic font-normal text-black">
                                        
                                            <p className="text-2xl italic font-normal max-sm:text-xs">Sobre mi</p>
                                        
                                            <ChevronDownIcon />
                                        
                                        </DropdownMenuTrigger>
                                        
                                        <DropdownMenuContent align="start">
                                        
                                            <DropdownMenuItem> <Link href={"/Page/AboutMe/DataScientist"}> <p className="text-2xl italic font-normal max-sm:text-xs">Ciencia de datos</p> </Link> </DropdownMenuItem>
                                        
                                            <DropdownMenuItem> <Link href={"/Page/AboutMe/FrontEnd"}> <p className="text-2xl italic font-normal max-sm:text-xs">Front-end</p> </Link> </DropdownMenuItem>
                                        
                                            <DropdownMenuItem> <Link href={"/Page/AboutMe/University"}> <p className="text-2xl italic font-normal max-sm:text-xs">Universidad</p> </Link> </DropdownMenuItem>
                                        
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                        
                                </BreadcrumbItem>
                        
                            </BreadcrumbList>
                        
                        </Breadcrumb>
                    
                    </div>

                </div>
                
        </div>
   
    )

}