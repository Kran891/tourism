import { BsBinoculars } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";
import { LiaPassportSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const Carousel:React.FC=()=>{
    return <>
    <div className="h-24">
                <div className="container">
                    <div className="flex">
                        <div className=" w-2/3 col-lg-3 col-md-3 col-sm-12 float-left">
                            <img className='w-52 h-22 pt-2 pb-5 pl-12' src="https://d1i3enf1i5tb1f.cloudfront.net/assets/Images/AGT-06437/raynatourslogo.png" alt="logo" />
                        </div>
                        <div className="w-1/3 col-lg-9 col-md-9 col-sm-12 mt-7 font-normal">
                            <div className="flex *:flex justify-evenly text-sm font-medium">
                                <a>Helpline<FaCaretDown/></a>
                                <a>English<FaCaretDown/></a>
                                <a>AED<FaCaretDown/></a>
                                <a className='mr-2 border-r-2'><CiUser size={20}/>Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <div className="relative w-full"> 
        <div className="py-5">
            <img src="https://cdn-images-rayna.imgix.net/imgiximages/Imagewise-Banner/429/formula-1-abu-dhabi-grand-prix-web-bnr.jpg?w=1920&h=540&auto=compress%2Cformat" alt="" />
        </div>
        <div className="flex justify-center">
        <ul className="absolute flex right-auto left-auto  *:flex *:items-center top-0 m-auto *:h-10 *:text-black w-[600px]   *:rounded-lg *:px-7  *:shrink-0 justify-between">
            <li className="bg-orange-500 *:text-[#FFFCFA]"><span className="px-2 font-bold"><BsBinoculars color="white"/></span><span className="font-semibold">Activities</span></li>
            <li className="bg-[#FFE9E2] *:text-black"><span className="px-2"><BsBuildings /></span><span className="font-semibold">Hotels</span></li>
            <li className="bg-[#FFE9E2] *:text-black"><span className="px-2"><TbBeach size={20}/></span><span className="font-semibold">Holidays</span></li>
            <li className="bg-[#FFE9E2] text-black"><span className="px-2"><LiaPassportSolid size={20}/></span><span className="font-semibold">Visa</span></li>
        </ul>
        </div>
        <div></div>
    </div>
    <hr></hr>
    <br /><br /><br />
    </>
}
export default Carousel