import React from 'react';
import { CITYIMAGES } from '../../constansts/cities-const';
interface Props{
    heading:string,
    description:string,

}
const Card = () => {
  return <>
  <div className='m-14 mt-4'>
    <h1 className='font-bold text-[20px]'>Top Cities to Visit</h1>
    <p className='text-[#707081] text-[13px] pt-2 pb-3'>Experience the thrill of discovering off-the-beaten-path gems and famous landmarks in top destinations worldwide - your wanderlust awaits!</p>
    <div className='flex gap-4'>
    {CITYIMAGES.map(ele=>{
        return <a href={ele.url} className='group transition delay-300 duration-300'><div className='relative shadow-md rounded-lg overflow-hidden'>
            <img src={ele.imageUrl} alt={ele.name} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-[30%] top-[70%]"></div>
            <span className='absolute bottom-4 group-hover:bottom-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300 group-hover:text-[18px] left-4 text-[17px] text-white font-bold'>{ele.name}</span>
        </div></a>
    })}
    </div>
  </div>
  </>
    
}
export default Card;
