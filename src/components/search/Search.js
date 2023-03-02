import React, {useState} from 'react';
import magnifier from '../../assets/icons/magnifier.png'
function Search({value, setValue,handleSubmit}) {

    const [click,setClick] =useState(false);
    const clickSearch =()=> {
        setClick(!click);
        if(!click){
            setValue("")
        }
        console.log(click)
    }

    const handleInput =(e)=> {
        setValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    // className={`${click ? "w-60" :"w-9" }   rounded-2xl h-9 w-9 focus:outline-none focus:border-blue-500 indent-4 text-gray-500 text-[13px]  drop-shadow-xl shadow-inner absolute`}
                    className={click? "searchInput rounded-2xl h-9 w-60 focus:outline-none focus:border-blue-500 indent-4 text-gray-500 text-[13px]  drop-shadow-xl shadow-inner absolute": "searchInput rounded-2xl h-9 w-9 focus:outline-none focus:border-blue-500 indent-10 text-gray-500 text-[13px]  drop-shadow-xl shadow-inner absolute"}
                    value={value}
                    onChange={handleInput}
                />
            </form>
            <button
                className="h-10 w-10 relative top-0 left-0 pl-2 z-10"
                onClick={clickSearch}
            >
                <img src={magnifier}
                    className="w-5 h-5 "
                />
            </button>
        </div>
    );
}

export default Search;
