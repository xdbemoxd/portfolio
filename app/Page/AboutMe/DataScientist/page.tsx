import { CardCourse } from "@/components/CardCourse/page";
import { CardCode } from "@/components/CardCode/page";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {GetData, GetDataProjects} from "@/lib/Api/ProfessionalDevelopment/ProfessionalDevelopment"

export default async function DataScientist(){

    const data = GetData();
    const projects = GetDataProjects();
        
    return(

        <div className="grid place-content-center mt-10 max-sm:mt-5 max-sm:w-auto">
            
            <div className="text-center bg-blue-500/15 m-5 p-4 rounded-xl shadow-lg shadow-blue-500/30 max-sm:p-0.5 max-sm:w-auto text-white">
                <h1 className="text-center text-7xl font-bold max-sm:text-xl">Data Scientist</h1>
            
                <p className="text-4xl max-sm:text-xs max-sm:text-justify">
                    Durante 2024, completé diversas formaciones en Ciencia de Datos, disciplina que constituye mi principal interés profesional. Como siguiente objetivo, planeo certificarme en <a href="https://www.coursera.org/specializations/machine-learning-introduction#courses" className="text-blue-500"> Machine learning</a>. Cursos relevantes realizados:
                </p>
            </div>

            <div className="max-sm:mb-20 grid place-content-center">

                <Carousel className="w-350 max-sm:w-75 max-sm:h-40">
                
                    <CarouselContent className="-ml-1">
                
                        {data.map(( df, index) => (
                
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 h-100 flex aspect-square items-center justify-center">
                            
                                <Card className="">
                            
                                    <CardContent className="max-sm:h-auto max-sm:w-75">
                            
                                        <CardCourse href={df.url} name={df.nombre} date={df.fecha}/>
                            
                                    </CardContent>
                            
                                </Card>
                            
                            </CarouselItem>
                        
                        ))}
                    
                    </CarouselContent>
                    
                    <CarouselPrevious className="max-sm:hidden"/>
                    
                    <CarouselNext className="max-sm:hidden"/>
                
                </Carousel>

            </div>

            

            <div className="mt-15 mb-20 max-sm:mt-20 grid place-content-center">

                <h1 className="text-6xl italic font-semibold mb-5 text-center max-sm:text-xl text-white grid place-content-center">Proyectos realizados</h1>

                <Carousel className="w-350 max-sm:w-75 max-sm:h-40">
                
                    <CarouselContent className="">
                
                        {projects.map(( df, index) => (
                
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            
                                <Card>
                            
                                    <CardContent className="max-sm:h-auto max-sm:w-75">
                            
                                        <CardCode href={df.href} name={df.name} programmingLanguage={df.programmingLanguage} description={df.description} />
                                            
                                    </CardContent>
                            
                                </Card>
                            
                            </CarouselItem>
                        
                        ))}
                    
                    </CarouselContent>
                    
                    <CarouselPrevious className="max-sm:hidden"/>
                    
                    <CarouselNext className="max-sm:hidden"/>
                
                </Carousel>

            </div>
            
            
        </div>
        
    )
}