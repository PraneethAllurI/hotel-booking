import React from 'react'
import SearchResult from './SearchResult';

const amenties = [
    {
        img: "https://i.pinimg.com/originals/98/40/a2/9840a25139e03ea40bfca40e9198f62b.jpg",
        location: "Mumbai",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen · Free parking · Washing Machine",
        star: 4.1,
        price: "₹2799 / night",
    },
    {
        img: "https://www.hilton.com/im/en/LONTLDI/3580064/bedroom.jpg?impolicy=crop&cw=603&ch=360&gravity=NorthWest&xposition=0&yposition=59&rw=528&rh=316",
        location: "mumbai",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen· Washing Machine",
        star: 4.93,
        price: "₹1199 / night",
    },
    {
        img: "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/queen-guest-room-v10749567-1440-1024x683.jpg",
        location: "mumbai,bijili",
        title: "stay at this spacious Edwardian House",
        description: "3 guest · 1 bedroom · 1 shared bathrooms  · kitchen · Free parking · Washing Machine",
        star: 4.33,
        price: "₹799 / night",
    },
    {
        img: "https://www.hilton.com/im/en/LONTLDI/3580064/bedroom.jpg?impolicy=crop&cw=603&ch=360&gravity=NorthWest&xposition=0&yposition=59&rw=528&rh=316",
        location: "mumbai,tower palace",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom  · wifi · kitchen · Free parking · Washing Machine",
        star: 4.53,
        price: "₹2199 / night",
    },
    {
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Hospitality-A_room_with_a_view_1200x768.jpeg?RAib7EXgur3WKGZH3LNH6RNGKSyO8zMg&size=770:433",
        location: "mumbai",
        title: "stay at this spacious Edwardian House",
        description: "4 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen · Free parking · Washing Machine",
        star: 4.7,
        price: "₹4799 / night",
    },
    {
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Hospitality-A_room_with_a_view_1200x768.jpeg?RAib7EXgur3WKGZH3LNH6RNGKSyO8zMg&size=770:433",
        location: "mumbai",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen",
        star: 4,
        price: "₹1799 / night",
    },
]

function Amenties() {
    return (
        <div>
            {amenties.map((object) => (
                <SearchResult img={object.img} location={object.location} title={object.title} description={object.description}
                    star={object.star} price={object.price} total={object.total} />
            ))}
        </div>
    )
}

export default Amenties;
