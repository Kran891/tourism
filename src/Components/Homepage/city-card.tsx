import React from 'react';
import { CITYIMAGES, CityImage } from '../../constansts/cities-const';
import CityCards from './city-cards';
interface Props{
    heading:string,
    description:string,
    Card?: typeof CityCards
    data: CityImage[]
}
const Card:React.FC<Props> = ({heading,description,Card:CityCards,data}) => {
  return <>
  <div className='m-14 mt-4'>
    <h1 className='font-bold text-[20px]'>{heading}</h1>
    <p className='text-[#707081] text-[13px] pt-2 pb-3'>{description}</p>
    {CityCards && <CityCards  data={data}/>}
  </div>
  </>
    
}
export default Card;
