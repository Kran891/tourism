import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer:React.FC=()=>{
    return <div className="w-full flex-col bg-[#FEF7F5] *:shrink-0">
       <div className="pt-10 mb-8  flex justify-center">
        <img className="w-24 h-15 block" src="./raynatourslogo.png" alt="Rayna Tours Logo" />
       </div>
       <div className="*:flex *:justify-center *:mb-1 *:shrink-0">
        <ul className="flex [#333333] *:border-r *:px-1">
            <li><FontAwesomeIcon icon={['fab','coffee']}/></li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li className="border-r-0">Terms & Conditions</li>
        </ul>
        <ul>
            <li></li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li className="border-r-0">Terms & Conditions</li>
        </ul>
       </div>
       <div></div>
       <div></div>
    </div>
}
export default Footer