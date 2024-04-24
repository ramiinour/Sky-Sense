import { getClient } from "@/apollo-client"
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import cleanData from "@/lib/cleanData";
import getBasePath from "@/lib/getBasePath";
import {RiEarthFill} from "@remixicon/react";
import { Divider } from "@tremor/react";

type Props ={
    params: {
        city:string;
        lat:string;
        long:string;
    }
}


const WeatherPage = async ({params:{city,lat,long}}:Props) => {
    const client = getClient()
    const dailyy = "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    const hourlyy = "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,wind_gusts_10m,uv_index,uv_index_clear_sky"
    const {data} = await client.query({
        query:fetchWeatherQuery,
        variables:{
            daily:dailyy,
            hourly:hourlyy,
            current_weather:"true",
            longitude:long,
            latitude:lat,
            timezone:"GMT"
        }
    })

    const results:Root= data.myQuery
    // const dataToSend = cleanData(results,city)

    // const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json",
    //     },
    //     body:JSON.stringify({
    //         weatherData:dataToSend
    //     })
    // })

    // const GPTdata = await res.json()
    // const {content} = GPTdata
    // console.log(results);
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
        {/* informatio banel */}
        <InformationPanel
        city={city}
        lat={lat}
        long={long}
        results={results}
        />

        <div className="flex-1 lg:p-10">
            <div className="p-5">
                <div className="pb-5">
                    <h2 className="text-xl font-bold">Todays Overview</h2>
                    <p className="text-sm text-gray-400">Last Updated at{" "}
                    {new Date(results.current_weather.time).toLocaleString()} {results.timezone}
                    </p>
                </div>
                
                <div className="m-2 mb-10">
                {/* <CalloutCard  message={"Weather input"}/> */}
                 {/* <CalloutCard  message={content}/> */}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                    <StatCard
                    title="Maximum Temperature"
                    metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                    color="yellow"
                    />
                    <StatCard
                    title="Minimum Temperature"
                    metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
                    color="green"
                    />

                    <div>
                    <StatCard
                    title="UV Index"
                    metric={results.daily.uv_index_max[0].toFixed(1)}
                    color="rose"
                    />
                    {Number(results.daily.uv_index_max[0].toFixed(1))>5 && (
                        <CalloutCard
                          message={"The UV is high today, be sure to wear SPF!"}
                          warning
                        />
                    )}
                    </div>

                    <div className="flex space-x-3">
                        <StatCard
                        title="Wind Speed"
                        metric={`${results.current_weather.windspeed.toFixed(1)}k/h`}
                        color="cyan"
                        />
                        <StatCard
                        title="Wind Direction"
                        metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                        color="violet"
                        />

                    </div>
                </div>
            </div>
            
            <Divider className="mb-5"/>
            <div className="space-y-3 mx-2">
              {/* Charts */}
              <TempChart results={results}/>
              <RainChart results={results}/>
              <HumidityChart results={results}/>
            </div>
        </div>
    </div>
  )
}

export default WeatherPage