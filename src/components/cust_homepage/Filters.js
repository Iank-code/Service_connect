import '../../App.css';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../redux/ServicesData';

function Filters() {
    const dispatch = useDispatch();

    return (
            <div className="flex flex-row justify-between px-20">
                <div onClick={() => dispatch(setSearchTerm(""))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/All Categories.png' alt='Cleaning'className='max-h-24'/>
                    <span>All Categories</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Cleaners"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/Cleaning.png' alt='Cleaning'/>
                    <span>Cleaners</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Electrician"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/Tester.png' alt='Electrical tools'/>
                    <span>Electricians</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Laundry"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/Washer.png' alt='Washing machine'/>
                    <span>Laundry</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Movers"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/Moving truck.png' alt='Truck icon'/>
                    <span>Movers</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Maintenance"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/Tools.png' alt='Maintenance tools'/>
                    <span>Maintenance</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Gardening"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/Gardening tools.png' alt='Gardening tools'/>
                    <span>Gardening</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Plumbing"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/Plumber.png' alt='Plumbing tools'/>
                    <span>Plumbing</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Remodeling"))} className='hover:bg-gray-400 cursor-pointer'>
                    <img src='/icons/House.png' alt='house icon'/>
                    <span>Remodeling</span>
                </div>
            </div>
    )
};

export default Filters;