import '../../App.css';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../redux/ServicesData';

function Filters() {
    const dispatch = useDispatch();

    return (
            <div className="flex flex-row justify-between px-20">
                <div onClick={() => dispatch(setSearchTerm(""))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/All Categories.png' alt='Cleaning' className='h-10'/>
                    <span>All </span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Cleaners"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/Cleaning.png' alt='Cleaning' className='h-10'/>
                    <span>Cleaners</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Electrician"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/Tester.png' alt='Electrical tools' className='h-10'/>
                    <span>Electricians</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Laundry"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/Washer.png' alt='Washing machine' className='h-10'/>
                    <span>Laundry</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Movers"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/Moving truck.png' alt='Truck icon' className='h-10'/>
                    <span>Movers</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Maintenance"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/Tools.png' alt='Maintenance tools' className='h-10'/>
                    <span>Maintenance</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Gardening"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/Gardening tools.png' alt='Gardening tools' className='h-10'/>
                    <span>Gardening</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Plumbing"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/Plumber.png' alt='Plumbing tools' className='h-10'/>
                    <span>Plumbing</span>
                </div>
                <div onClick={() => dispatch(setSearchTerm("Remodeling"))} className='rounded-lg p-4 hover:bg-gray-300 cursor-pointer'>
                    <img src='/icons/House.png' alt='house icon' className='h-10'/>
                    <span>Remodeling</span>
                </div>
            </div>
    )
};

export default Filters;