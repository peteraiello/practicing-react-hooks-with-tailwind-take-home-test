import Link from 'next/link';
import Globe from '../icons/globe-icon.svg'
import Shield from '../icons/shield-check-icon.svg'



const footer = (props) => {
    return  (
        <footer>
            <div className="bg-gray-50 border-t-2 border-gray-200 fixed bottom-0 w-full py-4">
                <div className="relative mx-auto container flex">
                    <div className="flex sm:flex-1 flex-row md:flex-grow sm:flex-col lg:flex-row">
                        <div className="hidden sm:block px-4">
                            <div className="flex py-2">
                                <Globe className="h-6 w-6 mr-4 inline text-gray-400"/>
                                <ul>
                                    <li>Free Shipping</li>
                                    <li className="hidden lg:block text-gray-500">Get 2-day free shipping anywhere in North America.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden sm:block px-4">
                            <div className="flex py-2">
                                <Shield className="h-6 w-6 mr-4 inline text-gray-400"/>
                                <ul>
                                    <li>2 Year Warranty</li>
                                    <li className="hidden lg:block text-gray-500">If anything goes wrong in the first two years,
                                    we'll replace it for free.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end w-50 lg:w-1/3 mx-auto text-center">
                        <span className="block">
                            <h1 className="text-3xl text-right sm:text-right font-bold">
                                ${ props.price }
                            </h1>
                            <p className="hidden sm:block text-gray-500">
                                    Need Financing? &nbsp;
                                <Link href="/">
                                    <a className="underline">Learn more</a>
                                </Link>
                            </p>
                        </span>
                        <div className="flex items-center">
                            <button className="btn bg-black-500 text-white bg-gray-900 py-2 px-4 rounded-lg ml-4 h-12">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;