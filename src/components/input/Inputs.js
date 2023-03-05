import React from 'react';

function Inputs({value, setValue, handleSubmit}) {

    const handleInput =(e)=> {
        setValue(e.target.value);
    }


    return (
        <div>
            <form style={{display:'flex'}} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="value"
                    placeholder="할 일을 입력하세요"
                    value={value}
                    className="w-full px-3 mr-4 text-gray-500 border rounded shadow"
                    onChange={handleInput}
                />
                <input
                    type="submit"
                    value="입력"
                    className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                />

            </form>

        </div>
    );
}

export default Inputs;