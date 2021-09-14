import React, { useState, useContext } from 'react'
import './Search.css'
import { addDays } from 'date-fns';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range";
import { useHistory } from 'react-router';
import { Button } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import { Context } from './Store';


function Search() {
    const [bookingStart, setbookingStart, bookingEnd, setbookingEnd, bookingDays, setbookingDays] = useContext(Context);
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const history = useHistory();
    console.log(bookingStart);
    console.log(bookingEnd);
    console.log(bookingDays);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);

    }

    var resultStart = selectionRange.startDate.toDateString();
    var resultEnd = selectionRange.endDate.toDateString();
    setbookingStart(resultStart);
    setbookingEnd(resultEnd);

    let diff = selectionRange.endDate.getTime() - selectionRange.startDate.getTime();
    let msInDay = 1000 * 3600 * 24;
    let resultDays = diff / msInDay;
    setbookingDays(resultDays);


    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect}
                minDate={new Date()}
                maxDate={addDays(new Date(), 10)}
                showTimeSelect
            />

            <Button
                onClick={
                    () => history.push('./search')}
            >
                <SearchIcon />
                Search Hotels</Button>
        </div>
    )
}

export default Search;
