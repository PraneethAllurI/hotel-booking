import React, { useState } from 'react'
import Search from './Search';
import { useHistory } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People"
import './DatePicker.css';
import { Button } from '@material-ui/core';

function DatePicker() {
    const history = useHistory();
    const [showSearch, setshowSearch] = useState(false);
    return (
        <div className="datePicker">

            <div className="datePicker__search">
                <Button onClick={() => setshowSearch(!showSearch)}
                    className="datePicker__searchButton"
                    variant='outlined'>
                    {showSearch ? "Pick Date" : "Search Dates"}
                </Button>
                {showSearch && <Search />}
                <h2>
                    Number of guests
                    <PeopleIcon />
                </h2>
                <input
                    min={0}
                    max={4}
                    defaultValue={2}
                    type="number" />
                <Button
                    onClick={() => history.push('./search')}
                >Search Hotels</Button>
            </div>
        </div>

    )
}

export default DatePicker
