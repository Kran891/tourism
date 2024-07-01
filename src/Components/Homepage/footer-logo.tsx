
import {FaFacebookSquare} from 'react-icons/fa'
import { FaSquareXTwitter ,FaLinkedin,FaSquareInstagram,FaSquareYoutube} from "react-icons/fa6";
const FooterLogo:React.FC=()=>{
    return <div className="w-full flex-col bg-[#FEF7F5] *:shrink-0">
       <div className="pt-10 mb-8  flex justify-center">
        <img className="w-24 h-15 block" src="https://d1i3enf1i5tb1f.cloudfront.net/assets/Images/AGT-06437/raynatourslogo.png" alt="Rayna Tours Logo" />
       </div>
       <div className="*:flex *:justify-center *:mb-1 *:shrink-0">
        <ul className="flex [#333333] *:border-r *:px-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li className="border-r-0">Terms & Conditions</li>
        </ul>
        <ul className='*:p-1 pb-3 *:white *:rounded-lg   *:mx-1 *:items-center'>
            <li><FaFacebookSquare color='#F36911' className='h-9 w-9 ' /></li>
            <li><FaSquareXTwitter color='#F36911' className='h-9 w-9'/></li>
            <li><FaLinkedin color='#F36911' className='h-9 w-9'/></li>
            <li><FaSquareInstagram color='#F36911' className='h-9 w-9'/></li>
            <li><FaSquareYoutube color='#F36911' className='h-9 w-9'/></li>
        </ul>
       </div>
       <hr className='pb-8 mx-4'/>
       <div>
        <ul className='flex justify-center *:mx-3 pb-8'>
            <li>&copy; Rayna Tours</li>
            <li>Designed and Developed By </li>
            <li>Kran Ent. Prices</li>
        </ul>
       </div>
    </div>
}
export default FooterLogo