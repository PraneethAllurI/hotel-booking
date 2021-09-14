
import SearchResult from './SearchResult';
import './UniqueStays.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const uniqueStays = [
    {
        img: "https://femina.wwmindia.com/content/2021/apr/smuniquestays-main1617934577.jpg",
        location: "Pune,Maharashtra",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom · 1 shared bathrooms · wifi · kitchen",
        star: 4.73,
        price: "₹3799 / night",
    },
    {
        img: "https://storage.googleapis.com/stateless-www-wotif-com/2019/12/2cfe2902-unique-stays-6.png",
        location: "Agra,Uttar Pradesh",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom · Washing Machine",
        star: 4.4,
        price: "₹2599 / night",
    },
    {
        img: "https://elopementweddingplanner.com/wp-content/uploads/2020/12/panorama-glass-lodge-venue-airbnb-elopement-wedding-packages-honeymoon-iceland-destination-nature-northern-lights-aurora-unique.jpg",
        location: "Spiti Valley,Himachal Pradesh",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom ·Couple Friendly · wifi ",
        star: 4.82,
        price: "₹6999 / night",
    },
    {
        img: "https://a0.muscache.com/im/pictures/62d0e70e-7107-4d1b-beb5-21f0ad2bb811.jpg?im_w=720",
        location: "Leh ladakh,kardungla pass",
        title: "stay at this spacious Edwardian House",
        description: "1 guest · 1 bedroom · 1 shared bathrooms · kitchen · Washing Machine",
        star: 3.2,
        price: "₹799 / night",
    },
    {
        img: "https://www.livelikeitstheweekend.com/wp-content/uploads/2020/01/1bc0dd8c-fabb-4c0c-a836-17dcc348c358.jpg",
        location: "Kerala,Kerala backwaters",
        title: "stay at this spacious Edwardian House",
        description: "4 guest · 2 bedroom · 2 shared bathrooms · wifi · kitchen · Couple Friendly  · Best for HoneyMoon",
        star: 4.93,
        price: "₹12,799 / night",
    },
    {
        img: "https://sophiessuitcase.com/wp-content/uploads/2020/06/unique-airbnb-stays-uk-blue-house.png",
        location: "Sahara Desert",
        title: "stay at this spacious Edwardian House",
        description: "2 guest · 1 bedroom · 1 shared bathrooms · Free parking ",
        star: 3.73,
        price: "₹1499 / night",
        total: null,
    },
]

function UniqueStays() {
    const history = useHistory();
    return (
        <div className="searchHome">
            <p>currently showing UNIQUE STAYS,Apply filters to see changes</p>
            <div className="searchHome__buttons">
                <Button
                    onClick={() => history.push('./amenties')}
                    variant="outlined">Near by</Button>
                <Button onClick={() => history.push('./tophotels')}
                    variant="outlined">Top Hotels</Button>
                <Button onClick={() => history.push('./novotel')}
                    variant="outlined">Novotel</Button>
                <Button onClick={() => history.push('./falaknama')}
                    variant="outlined">Falakname palace</Button>
                <Button onClick={() => history.push('./tajmahal')}
                    variant="outlined">Taj Mahal Palace</Button>
            </div>
            <div>
                {uniqueStays.map((object) => (
                    <SearchResult img={object.img} location={object.location} title={object.title} description={object.description}
                        star={object.star} price={object.price} total={object.total} />
                ))}
            </div>
        </div>
    )
}

export default UniqueStays;
