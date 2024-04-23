import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY
})


export async function POST(request:Request) {
    const {weatherData} = await request.json()

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        temperature:0.8,
        n:1,
        stream: false,
        messages: [{ role: "system", content: `Pretend you're a weather news presenting LIVE on television. be energetic and full of charisma. 
        Introduce yourself as Sky Sense. State the city you are providing a summary for. 
        Then give a summary of todays weather only.Make it easy for the viewers to understand and know what to do to prepare for those weather conditions such as wearing SPF if the UV is high etc. 
        use the uv_index data provided to provide UV advice.Provide a joke regarding the weather.
        Assume the data came from your team at the news office and not the user` },
        {role:"user",content:`Hi there can i get a summary of todays weather,use the following information to get the weather
        data: ${JSON.stringify(weatherData)}`}
    ],
    });

    
    console.log(`DATA IS`,response);

    return NextResponse.json(response.choices[0].message)
}