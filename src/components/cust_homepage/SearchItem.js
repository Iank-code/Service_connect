import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { setSearchTerm } from '../../redux/ServicesData';

function SearchItem() {
    const { searchTerm} = useSelector(state => state.searchTerm);
    const dispatch = useDispatch();

        
    return (
        <div className="flex my-8 mx-96">
            <div className="relative w-full">
                <input type="search" value={searchTerm} onChange={(e) => dispatch(setSearchTerm(e.target.value))} className="block p-2.5 w-full z-20 bg-gray-400 text-black rounded-r-lg rounded-l-lg placeholder:text-slate-950" placeholder="Search Services ..." required/>
                <button type="submit" className="absolute top-1 bottom-1 right-2 p-2.5 text-sm font-medium text-black bg-gray-400">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 3 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
};

export default SearchItem;