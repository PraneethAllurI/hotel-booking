
import React from 'react'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function Confirm() {
    return (
        <div className="App" >
            <h1 style={{ textAlign: 'center', color: 'coral', marginTop: 180 }}>Booking confirmed
                <DoneOutlineIcon style={{ color: 'green', marginLeft: 5 }} />
            </h1>
            <p style={{ textAlign: 'center' }}>Thank you,Your stay has been Confirmed</p>
            <p style={{ textAlign: 'center', marginBottom: 190 }}>Have a Great Day!</p>
        </div>
    )
}

export default Confirm;
