import { CardCourse } from "@/components/CardCourse/page";
import GetData from "@/lib/Api/ProfessionalDevelopment/ProfessionalDevelopment"

export default async function DataScientist(){

    const data = GetData();
        
    return(

        <div className="grid place-content-center mt-10 max-sm:mt-5">
            
            <div className="text-center bg-blue-500/15 m-10 p-4 mx-auto rounded-full shadow-lg shadow-blue-500/30 max-sm:p-0.5 max-w-475">
                <h1 className="text-7xl font-bold text-center">Data Scientist</h1>
            
                <p className="text-4xl m-4">
                    Durante 2024, completé diversas formaciones en Ciencia de Datos, disciplina que constituye mi principal interés profesional. Como siguiente objetivo, planeo certificarme en <a href="https://www.coursera.org/specializations/machine-learning-introduction#courses" className="text-blue-500"> Machine learning</a>. Cursos relevantes realizados:
                </p>
            </div>

            <ul className="grid grid-cols-4 max-sm:grid-cols-1">
                {
                    data.map( (dt,index) => (
                        <li key={index} className="grid place-content-center">
                            <CardCourse href={dt.url} name={dt.nombre} date={dt.fecha}/>
                        </li>
                    ) )
                }
            </ul>

            
            
        </div>
        
    )
}