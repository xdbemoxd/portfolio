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
    <Card className="w-full max-w-sm shadow-lg shadow-gray-500/30 max-sm:m-0.5">
      <CardHeader>
        <CardTitle className="text-2xl font-normal max-sm:text-xs">{ name }</CardTitle>
        <CardDescription className="text-xl font-normal max-sm:text-xs">
          { description }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-normal max-sm:text-xs"> Se utilizo: { programmingLanguage }</p>
      </CardContent>
      <CardFooter>
        <a href={ href } className="max-sm:text-xs "> GitHub </a>
      </CardFooter>
    </Card>
  )
}
