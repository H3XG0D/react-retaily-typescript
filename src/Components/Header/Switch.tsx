import React from 'react';

interface SwitchProps {
    value: boolean;
    onChange: () => void;
}

const Switch = (props: SwitchProps) => {
    return (
        <div onClick={props.onChange} className={`md:w-14 md:h-7 w-12 h-6 flex items-center 
        ${props.value === true ? "bg-blue-200" : "bg-gray-300"} rounded-full p-1 cursor-pointer`}>
            <div>

            </div>
        </div>
    );
};

export default Switch;