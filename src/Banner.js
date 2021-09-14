import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search';
import { useHistory } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People"
import EventIcon from '@material-ui/icons/Event';
import MyLocationIcon from '@material-ui/icons/MyLocation';



function Banner() {
    const history = useHistory();
    const [showSearch, setshowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                <Button onClick={() => setshowSearch(!showSearch)}
                    className="banner__searchButton"
                    variant='outlined'>
                    <EventIcon className="banner__datePicker" />
                    {showSearch ? "Pick Date" : "Search Dates"}
                </Button>
                {showSearch &&
                    <Search />


                }
                <div className="banner__guests">

                    <h4>
                        Number of guests
                        <PeopleIcon className="banner__peopleIcon" />
                    </h4>
                    <input
                        min={0}
                        max={4}
                        defaultValue={2}
                        type="number" />
                </div>
            </div>


            <div className="banner__info">
                <h1>get out and stretch your imagination</h1>
                <h5>
                    plan a different kind of getaway
                    to uncover the hidden gems near you.
                </h5>
                <Button
                    onClick={() => history.push('/unique')}
                    variant='outlined'>
                    <MyLocationIcon className="banner__infoLocation" />
                    Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
