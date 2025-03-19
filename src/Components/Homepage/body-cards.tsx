import { IoStarSharp } from "react-icons/io5";
import { Events } from "../../constansts/events-const";
import CityCards from "./city-cards";
import FooterLogo from "./footer-logo";
interface Props {
    data: Events[],
    width: string
}
const BodyCards: React.FC<Props> = ({ data, width }) => {
    const w=`sm:w-[${width}]`
    
    return <>
       <FooterLogo />
        <div className="sm:flex grid grid-cols-2  pb-2 *:shadow-lg  *:shrink-0 overflow-x-auto *:overflow-hidden gap-[1.5%]">
            {data.map(ele => {
                return <a className={`group sm:w-[25%]  rounded-2xl hover:bg-orange-200`} href={ele.url}><div className="relative group-hover:bg-orange-200">
                    <img src={ele.imgageUrl} className="h-[150px] w-full object-cover" alt={ele.header} />
                    <div className="mt-2 mx-1 pb-2 group-hover:bg-orange-200 align-bottom">
                        <h2 className="font-semibold text-left sm:text-center">{ele.header.length>25?ele.header.substring(0,25)+"...":ele.header}</h2>

                        <div className={`flex justify-between  items-end mt-2`}>
                            <div>
                                <p className="text-gray-400 text-[12px]">{ele.reviews} Reviews</p>
                                <p className="flex"><span className="flex">{[...Array(ele.rating)].map((_, i) => {
                                    return <IoStarSharp color="#F36911" />
                                })}</span>
                                    <span className="flex">{[...Array(5 - ele.rating)].map((_, i) => {
                                        return <IoStarSharp color="#FFE9E2" />
                                    })}</span>
                                </p>
                            </div>
                            <div className="text-right">
                                
                                {ele.offerPrice ?<p className="text-[12px] text-gray-400">Per Person from</p>:<p className="text-[12px] pt-[12px] text-gray-400">Per Person from</p>}
                                <p className="font-bold text-sm">AED {ele.offerPrice || ele.actualPrice}</p>
                                {ele.offerPrice && <p className="line-through text-[12px] text-gray-300">AED{ele.actualPrice}</p>}
                            </div>
                        </div>
                    </div>
                </div></a>
            })}
        </div>
    </>
}
export default BodyCards;
