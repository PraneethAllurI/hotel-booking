import React from 'react'
import StarIcon from "@material-ui/icons/Star"
import './showDetails.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

function ShowDetails({ title, description, img, price, star, location }) {
    const history = useHistory();

    return (
        <div className="showDetails">
            <h2> {title} </h2>
            <div className="showDetails__left">
                <img
                    className="showDetails__img"
                    src=/* {img}  */ "https://www.hilton.com/im/en/LONTLDI/3580064/bedroom.jpg?impolicy=crop&cw=603&ch=360&gravity=NorthWest&xposition=0&yposition=59&rw=528&rh=316" alt="" />
                <div className="showDetails__info">
                    <div className="showDetails__details">
                        <h2> {/* {title} */}Spot on for your new destination </h2>
                        <p> {/* {location} */} himachal prades,spiti valley </p>
                    </div>
                    <div className="showDetails__icon">
                        <StarIcon />
                        <h4> {/* {star} */} 4.2 </h4>
                    </div>

                </div>

                <div className="showDetails__desc">
                    <h2>Amenties</h2>
                    <p> {/* {description} */}1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen · Free parking · Washing Machine </p>
                    <Button variant="outlined">Read more</Button>
                </div>
                <h2>Description</h2>
                <p>Did you know that we’ve got 2.5 Crore bookings since March 2020? And this is all thanks to the sanitisation &
                    safety measures followed at our properties, from disinfecting surfaces with high-quality cleaning products
                    and maintaining social distance to using protective gear and more.</p>
            </div>
            <div className="showDetails__right">
                <div className="showDetails__content">

                    <h2> {/* {title}  */} Spot on for your new destination </h2>
                    <h2 className="price"> {/* {price}  */}  ₹***/-</h2>
                    <p>inclusive of all taxes</p>
                    <div className="showDetails__datesPick">
                        <h4>**no of days** | **rooms and guests**</h4>
                    </div>
                    <hr />
                    <div className="showDetails__finish">
                        <p>Price</p>
                        <h3> {/* {price} */} ₹****/-</h3>
                    </div>
                    <div className="showDetails__finish">
                        <p>total days</p>
                        <h3> {/* {totalDays} */} ** </h3>
                    </div>
                    <div className="showDetails__finish">
                        <p>Total price</p>
                        <h3 className="price1"> {/* {totalPrice} */} ₹**** /- </h3>
                    </div>

                    <div className="showDetails__book">
                        <Button
                            onClick={() => history.push('./confirm')}
                            variant="outlined" >Book Now</Button>
                    </div>
                </div>
            </div>

        </div>





    )
}

export default ShowDetails
