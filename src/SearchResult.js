import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react'
import './SearchResult.css'
import StarIcon from "@material-ui/icons/Star"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { useHistory } from 'react-router';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    const history = useHistory();
    return (
        <div className="searchResult">
            <img onClick={() => history.push('./booking')} src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p> < LocationOnIcon /> {location} </p>
                    <h3>{title} </h3>
                    <p>____</p>
                    <p> {description} </p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong> {star} </strong>
                        </p>
                    </div>
                    <div className="searchResult__price">
                        <h2> {price} </h2>
                        <p> {total} </p>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default SearchResult;
