import React from 'react'
import { useEffect } from 'react';


const Header = () => {
    useEffect(() => {
        const notifInterval = setInterval(() => {
            showNotification();
        }, 3000);

        return () => clearInterval(notifInterval);
    }, []);

    const showNotification = () => {
        // alert("new Notification")
        console.log("")
    }
    return (
        <div>
            Header
        </div>
    )
}

export default Header
