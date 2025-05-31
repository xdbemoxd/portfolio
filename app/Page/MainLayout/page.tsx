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
        <div className="flex flex-center justify-center w-screen bg-blue-300/70 mb-15">
                <div className="p-1">
                    <Image src={"/fotoPerfil.jpg"} alt="Foto de benjamin" width={140} height={190} style={imageStyle}/> 
                </div>
                
                <div className="flex-col justify-center pl-2">
                    <p className="text-3xl italic font-semibold pt-6">Benjamin Marroquin</p>
                    <div className="bottom-1 snap-center pt-8 justify-between">
                        
                        <Breadcrumb>

                            <BreadcrumbList>
                        
                                <BreadcrumbItem>
                        
                                    <BreadcrumbPage> <Link href={"/"}> <p className="text-2xl italic font-normal">Home</p> </Link> </BreadcrumbPage>
                        
                                </BreadcrumbItem>
                        
                                <BreadcrumbSeparator />
                        
                                <BreadcrumbItem>
                        
                                    <DropdownMenu>
                                        
                                        <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 text-2xl italic font-normal text-black">
                                        
                                            <p className="text-2xl italic font-normal">Sobre mi</p>
                                        
                                            <ChevronDownIcon />
                                        
                                        </DropdownMenuTrigger>
                                        
                                        <DropdownMenuContent align="start">
                                        
                                            <DropdownMenuItem> <Link href={"/"}> <p className="text-2xl italic font-normal">Ciencia de datos</p> </Link> </DropdownMenuItem>
                                        
                                            <DropdownMenuItem> <Link href={"/"}> <p className="text-2xl italic font-normal">Front-end</p> </Link> </DropdownMenuItem>
                                        
                                            <DropdownMenuItem> <Link href={"/"}> <p className="text-2xl italic font-normal">Universidad</p> </Link> </DropdownMenuItem>
                                        
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                        
                                </BreadcrumbItem>
                        
                                <BreadcrumbSeparator />
                        
                                <BreadcrumbItem>
                        
                                    <BreadcrumbPage> <Link href={"/"}> <p className="text-2xl italic font-normal">Contactame</p> </Link> </BreadcrumbPage>
                        
                                </BreadcrumbItem>
                        
                            </BreadcrumbList>
                        
                        </Breadcrumb>
                    
                    </div>

                </div>

                
        </div>
   
    )

}