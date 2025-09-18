import { useState } from 'react';

function useSwitch(defaultValue = false) {
    const [isOn, setIsOn] = useState(defaultValue);

    const toggle = () => {
        setIsOn(defaultValue => !defaultValue);
    };

    return [isOn, toggle];
}

export default useSwitch;