'use client'
import CityPicker from "@/components/CityPicker";
import { Card,Divider,Subtitle,Text } from "@tremor/react";


export default function Home() {
  return (
    <main className="min-h-screen p-10 flex flex-col justify-center items-center bg-gradient-to-br from-[#394F68] to-[#18387E]">
      <Card className="max-w-4xl mx-auto">
        <Text className="font-bold text-center mb-10 text-6xl">
         Sky Sense
        </Text>
        <Subtitle className="text-xl text-center">
         Powered by OpenAI, Next.js, Tailwind CSS , Tremor + More!
        </Subtitle>
 
       <Divider className="my-10"/>
  

        <Card className="bg-gradient-to-br from-[#394F68] to-[#18387E]">
          <CityPicker/>
        </Card>
      </Card>
     
    </main>
  );
}
