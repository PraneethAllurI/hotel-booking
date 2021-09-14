import React from 'react'
import SearchResult from './SearchResult';

const topHotels = [
    {
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/273899282.jpg?k=e249e4bfd8293bef2f20607e2d6368843451b047dfcc808fc11f065ca8cfae79&o=",
        location: "sikkim",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen · Free parking · Washing Machine",
        star: 4.13,
        price: "₹2799 / night",
    },
    {
        img: "https://www.hilton.com/im/en/LONTLDI/3580064/bedroom.jpg?impolicy=crop&cw=603&ch=360&gravity=NorthWest&xposition=0&yposition=59&rw=528&rh=316",
        location: "mussorie",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen· Washing Machine",
        star: 4.93,
        price: "₹1199 / night",
    },
    {
        img: "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/queen-guest-room-v10749567-1440-1024x683.jpg",
        location: "maharashtra",
        title: "stay at this spacious Edwardian House",
        description: "3 guest · 1 bedroom · 1 shared bathrooms  · kitchen · Free parking · Washing Machine",
        star: 4.33,
        price: "₹799 / night",
    },
    {
        img: "https://www.hilton.com/im/en/LONTLDI/3580064/bedroom.jpg?impolicy=crop&cw=603&ch=360&gravity=NorthWest&xposition=0&yposition=59&rw=528&rh=316",
        location: "kerala",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom  · wifi · kitchen · Free parking · Washing Machine",
        star: 4.53,
        price: "₹2199 / night",
    },
    {
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Hospitality-A_room_with_a_view_1200x768.jpeg?RAib7EXgur3WKGZH3LNH6RNGKSyO8zMg&size=770:433",
        location: "himachal",
        title: "stay at this spacious Edwardian House",
        description: "4 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen · Free parking · Washing Machine",
        star: 4.7,
        price: "₹4799 / night",
    },
    {
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/273899282.jpg?k=e249e4bfd8293bef2f20607e2d6368843451b047dfcc808fc11f065ca8cfae79&o=",
        location: "tosh village",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen",
        star: 4,
        price: "₹1799 / night",
    },
]

function TopHotels() {
    return (
        <div>
            {topHotels.map(object => (
                <SearchResult img={object.img} location={object.location} title={object.title} description={object.description}
                    star={object.star} price={object.price} total={object.total} />
            ))}
        </div>
    )
}

export default TopHotels;
