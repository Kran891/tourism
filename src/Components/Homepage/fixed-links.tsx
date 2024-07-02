import { FaWhatsapp } from "react-icons/fa"

const FixedLinks:React.FC=()=>{
    return <div className="">
        <a className="group hidden sm:block" href="#"><div className='group-hover:opacity-80 text-center left-[-34px]  p-1 bg-yellow-400 font-[600] rotate-90 fixed rounded-t-lg bottom-[37%] px-4'>Feedback</div></a>
        <a className="group " href="#"><div className='group-hover:text-lg group-hover:transition-all text-center right-12 lg:right-0 w-fit lg:left-12  p-3 px-4 bg-green-500 font-mono  fixed rounded-full bottom-[10%] flex items-center gap-x-1'><FaWhatsapp color='white' size={30}/><span className='hidden lg:inline text-white'>Message Us</span></div> </a>
    </div>
}
export default FixedLinks