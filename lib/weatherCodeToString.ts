import ClearDay  from '../public/icons/clear-day.svg'
import  Rain from '../public/icons/rain.svg'
import Snow from '../public/icons/snow.svg'
import Overcast from '../public/icons/overcast.svg'
import Thunderstorm from '../public/icons/thunderstorms.svg'
import Fog from '../public/icons/fog.svg'
import Drizzle from '../public/icons/clear-day.svg'
import PartiallyClear from '../public/icons/partly-cloudy-day.svg'
import FreezingDrizzle from '../public/icons/hail.svg'
import RimeFog from '../public/icons/haze.svg'
import FreezingRain from '../public/icons/sleet.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'



const weatherCodeToString: {[key:number]:{
    icon:StaticImport;
    label:string;
};
} = {
    0: {
        icon:ClearDay,
        label:"Clear sky"
    },
    1: {
        icon:PartiallyClear,
        label:"Mainly clear"
    },
    2: {
        icon:PartiallyClear,
        label:"Partly cloudy"
    },
    3: {
        icon:Overcast,
        label:"Overcast"
    },

    45: {
        icon:Fog,
        label:"Fog"
    },
    48: {
        icon:RimeFog,
        label:"Deposit rime fog"
    },
    51: {
        icon:Drizzle,
        label:"Drizzle"
    },
    53: {
        icon:Drizzle,
        label:"Drizzle"
    },
    55: {
        icon:Drizzle,
        label:"Drizzle"
    },
    56: {
        icon:FreezingDrizzle,
        label:"Freezing Drizzle"
    },
    57: {
        icon:FreezingDrizzle,
        label:"Freezing Drizzle"
    },
    61: {
        icon:Rain,
        label:"Rain"
    },
    63: {
        icon:Rain,
        label:"Rain"
    },
    65: {
        icon:Rain,
        label:"Rain"
    },
    66: {
        icon:FreezingRain,
        label:"Freezing Rain"
    },
    67: {
        icon:FreezingRain,
        label:"Freezing Rain"
    },
    71: {
        icon:Snow,
        label:"Snow"
    },
    73: {
        icon:Snow,
        label:"Snow"
    },
    75: {
        icon:Snow,
        label:"Snow"
    },
    77: {
        icon:Snow,
        label:"Snow Grains"
    },
    80: {
        icon:Rain,
        label:"Rain Showers"
    },
    81: {
        icon:Rain,
        label:"Rain Showers"
    },
    82: {
        icon:Rain,
        label:"Rain Showers"
    },
    85: {
        icon:Snow,
        label:"Snow Showers"
    },
    86: {
        icon:Snow,
        label:"Snow Showers"
    },
    95: {
        icon:Thunderstorm,
        label:"Thunderstorm"
    },
    96: {
        icon:Thunderstorm,
        label:"Thunderstorm"
    },
    99: {
        icon:Thunderstorm,
        label:"Thunderstorm"
    },


}


export default weatherCodeToString