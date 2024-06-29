import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BannerCarousel from './bannerCarousel'

const Header: React.FC = () => {
    return (
        <>
            <div className="h-24">
                <div className="container">
                    <div className="flex">
                        <div className=" w-2/3 col-lg-3 col-md-3 col-sm-12 float-left">
                            <img className='w-52 h-22 pt-2 pb-5 pl-12' src="https://d1i3enf1i5tb1f.cloudfront.net/assets/Images/AGT-06437/raynatourslogo.png" alt="logo" />
                        </div>
                        <div className="w-1/3 col-lg-9 col-md-9 col-sm-12 mt-7 font-normal">
                            <div className="flex justify-evenly text-sm font-medium">
                                <a>Helpline</a>
                                <a>English</a>
                                <a>AED</a>
                                <a className='mr-2 border-r-2'>Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BannerCarousel />
        </>
    )
}

export default Header