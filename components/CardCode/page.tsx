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
    <Card className="w-full max-w-sm shadow-lg shadow-gray-500/30">
      <CardHeader>
        <CardTitle className="text-2xl font-normal">{ name }</CardTitle>
        <CardDescription className="text-xl font-normal">
          { description }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-normal"> Se uso el siguiente lenguaje de programacion: { programmingLanguage }</p>
      </CardContent>
      <CardFooter>
        <a href={ href }> GitHub </a>
      </CardFooter>
    </Card>
  )
}
