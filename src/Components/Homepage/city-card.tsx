import React from 'react';
import { CITYIMAGES, CityImage } from '../../constansts/cities-const';
import CityCards from './city-cards';
import BodyCards from './body-cards';
import { Events } from '../../constansts/events-const';
interface CityCardProps {
    heading: string;
    description: string;
    Card: typeof CityCards;
    data: CityImage[];
}
<<<<<<< HEAD
const Card:React.FC<Props> = ({heading,description,Card,data}) => {
=======

interface BodyCardProps {
  heading: string;
  description: string;
  Card: typeof BodyCards;
  width: string;
  data: Events[];
}

const Card:React.FC<CityCardProps | BodyCardProps> = ({heading,description,Card,...rest}) => {
>>>>>>> 571e36f6fd1a5add8702ee908c85722605edd8cc
  return <>
  <div className='m-14 mt-4'>
    <h1 className='font-bold text-[20px]'>{heading}</h1>
    <p className='text-[#707081] text-[13px] pt-2 pb-3'>{description}</p>
<<<<<<< HEAD
    {Card && <Card  data={data}/>}
=======
    { Card===CityCards && <CityCards data={(rest as CityCardProps).data}/>}
    {Card === BodyCards && <BodyCards data={(rest as BodyCardProps).data} width={(rest as BodyCardProps).width}/>}
>>>>>>> 571e36f6fd1a5add8702ee908c85722605edd8cc
  </div>
  </>
    
}
export default Card;
