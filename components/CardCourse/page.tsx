import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  href: string
  name: string
  date: string
}

export function CardCourse({ href, name, date }:Props) {
  return (
    <Card className="w-full h-75  max-sm:w-auto max-sm:h-auto max-sm: bg-slate-900 border-2 border-gray-800/100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-900/90 text-white">
      <CardHeader >
        <CardTitle className="text-2xl font-normal max-sm:text-xs italic">{ name }</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-normal max-sm:text-xs"> Se realizó: { date }</p>
      </CardContent>
      <CardFooter>
        <a href={ href } className="max-sm:text-xs text-xl"> Enlace del certificado </a>
      </CardFooter>
    </Card>
  )
}
