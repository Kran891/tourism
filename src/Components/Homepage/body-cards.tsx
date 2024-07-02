import { IoStarSharp } from "react-icons/io5";
import { Events } from "../../constansts/events-const";
interface Props {
    data: Events[],
    width: string
}
const BodyCards: React.FC<Props> = ({ data, width }) => {
    return <>
        <div className="lg:flex grid grid-cols-2 *:shadow-lg *:overflow-hidden gap-[1.5%]">
            {data.map(ele => {
                return <a className="w-full lg:w-[25%] rounded-lg" href={ele.url}><div className="relative">
                    <img src={ele.imgageUrl} className="h-[180px] w-full" alt={ele.header} />
                    <h2 className="font-semibold mt-2 mx-1 text-center">{ele.header}</h2>
                   
                        <div className={`flex bottom-0   justify-between items-end m-2 mt-auto`}>
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
                                <p className="text-[12px] text-gray-400">Per Person from</p>
                                <p className="font-bold text-sm">AED {ele.offerPrice || ele.actualPrice}</p>
                                {ele.offerPrice && <p className="line-through text-[12px] text-gray-300">AED{ele.actualPrice}</p>}
                            </div>
                        </div>
                   
                </div></a>
            })}
        </div>
    </>
}
export default BodyCards;
