import React from 'react';

const CommonLoader = ({ Load = false }) => {
    return (
        <>
            {Load && <div className="height-100 overlay-loading ongoing-payment-spin">
                <div className="spin-load" />
            </div>}
        </>
    )
}

export default CommonLoader;
