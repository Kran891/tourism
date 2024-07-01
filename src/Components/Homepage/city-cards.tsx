import { CITYIMAGES, CityImage } from "../../constansts/cities-const"
interface Props{
    data:CityImage[]
}
const CityCards:React.FC<Props>=({data})=>{
    return <>
    <div className='grid grid-cols-2 lg:flex gap-4'>
    {data.map(ele=>{
        return <a href={ele.url} className='group transition delay-300 duration-300'><div className='relative shadow-md rounded-lg overflow-hidden'>
            <img src={ele.imageUrl} alt={ele.name} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-[30%] top-[70%]"></div>
            <span className='absolute bottom-4 group-hover:bottom-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300 group-hover:text-[18px] left-4 text-[17px] text-white font-bold'>{ele.name}</span>
        </div></a>
    })}
    </div>
    </>
}
export default CityCards