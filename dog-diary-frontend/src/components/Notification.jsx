import { useEffect } from 'react';

function Notification({ message, type, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);
    
    const getColor = () => {
        if (type === 'success') return '#4CAF50';
        if (type === 'warning') return '#FF9800';
        return '#333';
    };
    
    return (
        <div className="notification" style={{ backgroundColor: getColor() }}>
            {message}
        </div>
    );
}

export default Notification;