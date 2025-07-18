import { CardCode } from "@/components/CardCode/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center mt-10 max-sm:mt-5 w-auto">

      <div className="text-center bg-blue-500/15 m-10 p-4 mx-auto rounded-xl shadow-lg shadow-blue-500/30 max-sm:p-0.5 text-white">
        <h1 className="text-5xl font-bold m-1 max-sm:text-xl"> Desarrollador web - Área frontend  </h1>
        <p className="text-2xl font-normal m-1 max-sm:text-xs"> Creo aplicaciones web usando Next.js como framework principal y Shadcn para componentes UI</p>
        <p className="text-2xl font-normal m-1 max-sm:text-xs"> Resido en Carabobo, Venezuela. Mi stack principal: Next.js para desarrollo frontend </p>
        <p className="text-2xl font-normal m-1 max-sm:text-xs"> Encuéntrame en: <a href="https://github.com/xdbemoxd"> <span className="text-blue-600"> GitHub </span>  </a> y en <a href="https://www.linkedin.com/in/benjamin-marroquin-a350431bb"> <span className="text-blue-600"> LinkedIn </span> </a> </p>
      </div>

      <div className="text-center bg-blue-500/15 m-10 p-4 mx-auto rounded-xl shadow-lg shadow-blue-500/30 max-sm:p-0.5 text-white">
        <h1 className="text-5xl font-bold m-1 max-sm:text-xl"> Data scientist </h1>
        <p className="text-2xl font-normal m-1 max-sm:text-xs">Formación en Ciencia de Datos mediante cursos especializados en: análisis estadístico, imputación de datos y visualización de datos. </p>
        <p className="text-2xl font-normal m-1 max-sm:text-xs"> Mi siguiente meta: tras completar mi formación en ML, crearé proyectos de análisis predictivo desde cero. </p>
        <p className="text-2xl font-normal m-1 max-sm:text-xs"> Para mas infomarcion: <Link href={"/Page/AboutMe/DataScientist"} className="text-blue-600"> sobre mi en ciencia de datos</Link> </p>
      </div>

      <div className="max-sm:grid max-sm:place-content-center max-sm:w-auto">
        
        <h1 className="text-5xl font-bold max-sm:text-2xl max-sm:text-center text-white"> Codigo </h1>
        
        <div className="grid grid-cols-3 max-sm:grid-cols-1">
          
          <div className="p-3 rounded-lg bg-white grid place-center mb-5 h-auto w-85 max-sm:mt-5">
            <CardCode href="https://github.com/xdbemoxd/portfolio.git" name="Portfolio" programmingLanguage="Next.js" description="Portafolio online para dar mas detalles sobre mi" />
          </div>

          <div className="p-3 rounded-lg bg-white grid place-center mb-5 h-auto w-85">
            <CardCode href="https://github.com/xdbemoxd/semaforo_c_SO.git" name="semaforo_c_SO" programmingLanguage="C y Python" description="Programa que maneja multiples procesos al mismo tiempo" />
          </div>

          <div className="p-3 rounded-lg bg-white grid place-center h-auto w-85">
            <CardCode href="https://github.com/xdbemoxd/manejo_datos_faltantes.git" name="manejo_datos_faltantes" programmingLanguage="Python" description="Proyecto realizado con el fin de practicar lo aprendido en el curso de manejo de datos faltantes de platzi" />
          </div>

        </div>

      </div>

    </div>
  );
}
