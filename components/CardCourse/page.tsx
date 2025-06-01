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
    <Card className="w-full max-w-sm shadow-lg shadow-gray-500/30 max-sm:m-2 mb-5 bg-violet-400/40 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-violet-400/70">
      <CardHeader>
        <CardTitle className="text-3xl font-normal max-sm:text-xs">{ name }</CardTitle>
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
