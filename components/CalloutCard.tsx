'use client'
import {Callout} from '@tremor/react'
import {RiCheckboxCircleFill , RiErrorWarningFill } from "@remixicon/react";


type Props = {
    message:string;
    warning?:boolean;
}

const CalloutCard = ({message,warning}:Props) => {
  return (
     <Callout
     className='mt-4 test'
     title={message}
     icon={warning? RiErrorWarningFill : RiCheckboxCircleFill}
     color={warning?"rose":"teal"}
     />
  )
}

export default CalloutCard