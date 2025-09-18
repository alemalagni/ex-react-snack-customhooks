import { useState, useEffect } from 'react';

function useCustomPointer(emoji) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', updatePosition)

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: mousePosition.y,
                left: mousePosition.x,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                fontSize: '2rem',
            }}
        >
            {emoji}
        </div>);

}

export default useCustomPointer;