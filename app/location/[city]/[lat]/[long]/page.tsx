
type Props ={
    params: {
        city:string;
        lat:string;
        long:string;
    }
}


const WeatherPage = ({params:{city,lat,long}}:Props) => {
  return (
    <div>{city}</div>
  )
}

export default WeatherPage