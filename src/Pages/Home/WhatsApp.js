import React from 'react';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsApp = () => {
    return (
        <div className='p-3  fixed bottom-0 right-0'>

            <FloatingWhatsApp

            phoneNumber='+8801829704087'
            accountName="Amortha kumar Shill"
            allowEsc
            allowClickAway
            notification
            notificationSound
            />
            
        </div>
    );
};

export default WhatsApp;