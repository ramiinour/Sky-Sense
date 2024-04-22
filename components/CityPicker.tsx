'use client'

import {useState} from 'react'
import { useRouter } from 'next/navigation'
import { Country , City } from 'country-state-city'
import Select from 'react-select'
import {RiEarthFill} from "@remixicon/react";

import React from 'react'

type countryOption = {
    value: {
        latitude:string;
        longtitude:string;
        isoCode:string;
    };
    label: string;
} | null


type cityOption = {
    value: {
        latitude:string;
        longtitude:string;
        countryCode:string;
        name:string;
        stateCode:string;
    };
    label: string;
} | null


const countryOptions = Country.getAllCountries().map((country)=> ({
    value: {
        latitude: country.latitude,
        longtitude:country.longitude,
        isoCode:country.isoCode,
    },
    label: country.name
}))





const CityPicker = () => {
    const [selectedCountry,setSelectedCountry] = useState<countryOption>(null)
    const [selectedCity,setSelectedCity] = useState<cityOption>(null)
    const router = useRouter()

    
    const handleSelectedCountry = (option:countryOption)=>{
     setSelectedCountry(option)
     setSelectedCity(null)
    }

    const handleSelectedCity = (option:cityOption)=>{
      setSelectedCity(option)
      router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longtitude}`)
    }



  return (
    <div className='space-y-4'>
        <div className='space-y-2'>
             <div className='flex items-center space-x-2 text-white/80'>
                <RiEarthFill className='h-5 w-5 text-white'/>
                <label htmlFor='country'>Country</label>
             </div>


            <Select 
            className='text-black'
            options={countryOptions}
            value={selectedCountry}
            onChange={handleSelectedCountry}
            />
        </div>

        {selectedCountry && (
            <div className='space-y-2'>
            <div className='flex items-center space-x-2 text-white/80'>
               <RiEarthFill className='h-5 w-5 text-white'/>
               <label htmlFor='country'>City</label>
            </div>


           <Select 
           className='text-black'
           options={
            City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(state=> ({
                value: {
                    latitude:state.latitude!,
                    longtitude:state.longitude!,
                    countryCode:state.countryCode,
                    name:state.name,
                    stateCode:state.stateCode,
                },
                label: state.name,
            }))
           }
           value={selectedCity}
           onChange={handleSelectedCity}
           />
       </div>
        )}
    </div>
  )
}

export default CityPicker