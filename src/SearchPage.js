import React, { useContext } from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core"
import SearchResult from './SearchResult';
import { Context } from './Store';

const sresult = [
    {
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Hospitality-A_room_with_a_view_1200x768.jpeg?RAib7EXgur3WKGZH3LNH6RNGKSyO8zMg&size=770:433",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom · Couple Friendly· 1 shared bathrooms · wifi · kitchen · Free parking · Washing Machine",
        star: 4.73,
        price: 999,
        total: "",
    },
    {
        img: "https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=20&m=627892060&s=612x612&w=0&h=k6QY-qWNlFbvYhas82e_MoSXceozjrhhgp-krujsoDw=",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "3 guest · 1 bedroom  · wifi · kitchen · Free parking · Washing Machine",
        star: 4.60,
        price: 1299,
        total: "",
    },
    {
        img: "https://www.uberoom.com/images/user/home/hotel-room-anniversary-decoration.jpg",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · Best for Honeymoon · 1 shared bathrooms · wifi · Free parking · Washing Machine",
        star: 4.91,
        price: 2699,
        total: "",
    },
    {
        img: "https://assets1.hospitalitytech.com/styles/content_md/s3/2018-06/LuMINN%20room%2054.jpg?itok=l6ngXlgT",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen  · Washing Machine",
        star: 3.73,
        price: 699,
        total: "",
    },
    {
        img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1191,w_2121,x_0,y_223/f_auto,q_auto,w_1100/v1555272928/shape/mentalfloss/50569-istock-486178472.jpg",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "4 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen",
        star: 4.23,
        price: 3499,
        total: "",
    },
    {
        img: "https://www.fohlio.com/blog/wp-content/uploads/2017/12/Hotel-Interior-Design-Pschology-of-Color-Fohlio-blue-Ritz-Carlton.jpeg",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom · 1 shared bathrooms · Free parking · Washing Machine",
        star: 3.91,
        price: 1499,
        total: "",
    },
    {
        img: "https://i.ytimg.com/vi/znc6S3_iTBw/maxresdefault.jpg",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "3 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen · Free parking · Washing Machine",
        star: 4.30,
        price: 75000,
        total: "",
    },
]

function SearchPage() {
    const [bookingStart, setbookingStart, bookingEnd, setbookingEnd, bookingDays, setbookingDays] = useContext(Context);
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <h3>Selected Dates from {bookingStart}
                    - {bookingEnd}
                </h3>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            {sresult.map((object) => (
                <SearchResult img={object.img} location={object.location} title={object.title} description={object.description}
                    star={object.star} price={`₹${object.price}/Night`}
                    total={
                        bookingDays &&
                        `Total ₹${object.total = object.price * bookingDays}/-${bookingDays}Nights`} />
            ))}
        </div>
    )
}

export default SearchPage;
