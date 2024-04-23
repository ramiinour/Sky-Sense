'use client'
import { Card , Metric , Text , Color} from "@tremor/react"
import Image from "next/image"

import max from "../public/icons/thermometer-warmer.svg"
import min from "../public/icons/thermometer-colder.svg"
import uv from "../public/icons/uv-index.svg"
import speed from "../public/icons/wind-beaufort-1.svg"
import direction from "../public/icons/compass.svg"

type Props = {
    title:string;
    metric:string;
    color?: Color;
}


const StatCard = ({title,metric,color}:Props) => {

  const iconGenerator = (title:string)=> {
   return title === "Maximum Temperature"?max:
   title === "Minimum Temperature"?min:
   title === "UV Index"?uv:
   title === "Wind Speed"?speed:
   title === "Wind Direction"?direction:""
  }
  return (
    <Card decoration="top" decorationColor={color} className="flex items-center justify-between">
      <div>
      <Text>{title}</Text>
     <Metric>{metric}</Metric>
      </div>
     <Image
            src={iconGenerator(title)}
            alt={title}
            width={60}
            height={60}
            />
    </Card>
  )
}

export default StatCard