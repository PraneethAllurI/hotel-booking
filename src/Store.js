import React, { useState } from 'react'


export const Context = React.createContext();

const Store = ({ children }) => {
    const [bookingStart, setbookingStart] = useState('');
    const [bookingEnd, setbookingEnd] = useState('');
    const [bookingDays, setbookingDays] = useState(1);

    return (
        <Context.Provider value={[bookingStart, setbookingStart, bookingEnd, setbookingEnd, bookingDays, setbookingDays]}>
            {children}
        </Context.Provider>
    )
};

export default Store;
