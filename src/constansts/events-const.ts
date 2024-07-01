export interface Events{
    imgageUrl: string,
    url: string,
    reviews: number,
    rating: number,
    actualPrice: number,
    offerPrice?: number,
    header: string
}
const EVENTS_CONST:Events[]=[
    {header:"Fontana Circus 2024 Abu Dhabi",imgageUrl:"https://cdn.platinumlist.net/upload/event/fontana_showcircus_2024_in_abu_dhabi_2024_jul_02_fontana_circus_tent_marina_mall_abu_dhabi_89991-full-en1701855123.jpg",rating:0,actualPrice:150,offerPrice:135,reviews:0,url:"#"},
    {header:"Formula 1 Abu Dhabi Grand Prix 2024",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-509047//mj6U9vSB-YMC-North-Grandstand.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:0,actualPrice:2749,reviews:0,url:"#"},
    {header:"Johanna Pichlmair Classical Music Show",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-509148//400%20x%20230%20copy%20B%20Praak.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:0,actualPrice:500,offerPrice:475,reviews:0,url:"#"},
    {header :"Varun Grover live in Dubai",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-509130//front%20varun%20grover.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:0,actualPrice:129,offerPrice:125,reviews:0,url:"#"}
]
const EXP_DUBAI:Events[]=[
    {header :"Dubai Aquarium and Underwater Zoo",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-3636//111.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:199,offerPrice:150,reviews:104,url:"#"},
    {header :"Dubai Dolphinarium",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-65//dubai-dolphinerium-dubai-front.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:50,reviews:88,url:"#"},
    {header :"Dubai Frame",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-5066//Dubai_Frame.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:52.50,offerPrice:52,reviews:271,url:"#"},
    {header :"Evening Desert Safari",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-508805//Desert-safar-banner.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:395,offerPrice:159,reviews:46,url:"#"},
    {header :"IMG Worlds of Adventure",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-4753//33.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:60,reviews:226,url:"#"},
    {header :"Ski Dubai Tickets",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-172//ski-dubai-front.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:263,reviews:144,url:"#"}
]
const EXP_ABU_DHABI:Events[]=[
    {header :"Desert Safari Abu Dhabi",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-174//desert-safari-front.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:245,reviews:530,url:"#"},
    {header :"Dhow Cruise Abu Dhabi",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-241//dhow-cruise-dinner-in-abu-dhabi-front.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:350,reviews:51,url:"#"},
    {header :"Emirates Park Zoo",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-4710//emirates-zoo-img.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:50,offerPrice:45,reviews:68,url:"#"},
    {header :"Ferrari Theme Park Abu Dhabi",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-4827//ABU%20DHABI,%20UAE%20-%20OCT%201%20The%20exterior%20of%20Ferrari%20World%20at%20Yas%20Island%20in%20Abu%20Dubai%20in%20the%20UAE%20on%20October.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:354,reviews:143,url:"#"},
    {header :"Liwa Safari",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-182//liwa-safari-tour-banner.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:795,reviews:51,url:"#"},
    {header :"Louvre Abu Dhabi",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-5185//Louvre-Abu-Dhabi-front.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:63,offerPrice:60,reviews:94,url:"#"},
    {header :"Qasr Al Watan Abu Dhabi",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-42334//c9043980fdce4764efdeb6354097fc81.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:65,offerPrice:53,reviews:68,url:"#"},
    {header :"Skydive Abu Dhabi",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-508500//sky-dive-front-img.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:1600,reviews:45,url:"#"},
    {header :"The National Aquarium Abu Dhabi",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-5901//Aquarium-Abu-Dhabi-01.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:110,reviews:38,url:"#"},
    {header :"Yas Waterworld",imgageUrl:"https://cdn-images-rayna.imgix.net/imgiximages//Tour-Images//false-111//slither-slide.jpg?w=270&h=309&auto=compress%2Cformat&crop=faces&fit=min",rating:5,actualPrice:295,reviews:86,url:"#"}
]
export {EVENTS_CONST,EXP_DUBAI,EXP_ABU_DHABI}
