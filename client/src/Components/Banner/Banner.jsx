import { Link } from 'react-router-dom';
import banner from '../../Assets/Images/logo.png';
import Button from '../Button/Button';


const Banner = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 md:w-1/2">
                    <img src={banner} alt="restaurant" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 p-10 flex flex-col justify-center items-center md:items-start md:w-1/2">
                    <div className="mb-8 text-center md:text-left">
                        <h1 className="text-4xl font-semibold text-gray-800 font-serif mb-4">
                            TastyTracks: Explore Culinary Delights with Ease.
                        </h1>
                        <p className="text-gray-900 font-sans">
                            Explore TastyTracks, where finding the perfect restaurant is a breeze!
                            Browse through a variety of places, each with tempting pictures, addresses, and contact info.
                            Craving a cozy cafe or a fine dining spot? TastyTracks has it all.
                            Easily update, delete, or add new restaurants to customize your experience.
                        </p>
                    </div>
                    <div className="mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                        <Link to='/restaurants'>
                            <Button
                                className="bg-[#F39300] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition w-full md:w-full"
                                text="Explore Now"
                            />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner