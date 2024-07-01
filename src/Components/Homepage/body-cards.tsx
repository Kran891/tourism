import { IoStarSharp } from "react-icons/io5";
import { Events } from "../../constansts/events-const";
interface Props{
    data:Events[],
    width:string
}
const BodyCards:React.FC<Props>=({data,width})=>{
    return<>
    <div className="flex *:shadow-lg *:overflow-hidden gap-[1.5%]">
    {data.map(ele=>{
        return <a className="w-[22%] rounded-lg" href={ele.url}><div>
        <img src={ele.imgageUrl} alt={ele.header} />
        <h2>{ele.header}</h2>
        <div className={`flex justify-between items-end`}>
            <div>
                <p>{ele.reviews} Reviews</p>
                <p className="flex"><span className="flex">{[...Array(ele.rating)].map((_,i)=>{
                      return <IoStarSharp color="#F36911"/>
                })}</span>
                <span className="flex">{[...Array(5-ele.rating)].map((_,i)=>{
                      return <IoStarSharp color="#FFE9E2"/>
                })}</span>
                </p> 
            </div>
            <div>
                <p className="text-[12px] text-gray-300">Per Person from</p>
                <p className="font-bold">AED {ele.offerPrice || ele.actualPrice}</p>
                {ele.offerPrice && <p className="line-through text-gray-300">AED{ele.actualPrice}</p>}
            </div>
        </div>
    </div></a>
    })}
    </div>
    </>
}
export default BodyCards;
