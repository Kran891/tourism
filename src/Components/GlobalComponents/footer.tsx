import { TOUR_ACTIVITIES, TRENDING_DESITINATIONS, UAE_CITIES } from "../../constansts/footer-cities-const"
import FooterCities from "../Homepage/footer-cities"
import FooterLogo from "../Homepage/footer-logo"

const Footer:React.FC=()=>{
    return <>
    <div className="shadow-md ">
    <div className="m-14 mt-2">    
    <span className="font-bold block my-4">Explore More On Rayna Tours</span>
    <FooterCities header='Best Selling UAE Tours :' cities={UAE_CITIES} />
    <FooterCities header='Trending Destinations :' cities={TRENDING_DESITINATIONS} />
    <FooterCities header='Things to do in UAE :' cities={TOUR_ACTIVITIES} />
    </div>
    <FooterLogo />
    </div>
    

    </>
}

export default Footer