import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  href: string
  name: string
  programmingLanguage: string
  description: string
}

export function CardCode({ href, name, programmingLanguage, description }:Props) {
  return (
    <Card className="w-full h-85 max-sm:w-85 max-sm:h-auto max-sm: bg-slate-900 border-2 border-gray-800/100 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-normal max-sm:text-xs">{ name }</CardTitle>
        <CardDescription className="text-lg font-normal max-sm:text-xs">
          { description }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-normal max-sm:text-xs"> Se utilizo: { programmingLanguage }</p>
      </CardContent>
      <CardFooter>
        <a href={ href } className="max-sm:text-xs transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-900/90"> GitHub </a>
      </CardFooter>
    </Card>
  )
}
