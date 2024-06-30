import { Cities } from "../../constansts/footer-cities-const";

interface Props{
  header:string,
  cities:Cities[]
}
const FooterCities : React.FC<Props>=({header,cities})=>{
  return <div>
    <ul className="flex flex-wrap gap-2 *:pr-2 my-3 items-center">
    <span className="font-[600]">{header}</span>
      {cities.map(ele=>{
        return <li className="hover:text-red-500  font-[500] text-[12px] font border-r last:border-r-0"><a href={ele.url}>{ele.title}</a></li>
      })}
      {/* <li><a href="#">Abu Dhabi City Tour With Ferrari World</a></li>
      <li><a href="#">Abu Dhabi City Tour</a></li>
      <li><a href="#">Burj Khalifa At The Top Tickets</a></li> */}
    </ul>
  </div>
  
}
export default FooterCities;