import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'


function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
                    title="Unique stays" description="unique activities we can do together,leb by a
                world of hosts." />
                <Card src="https://cdn.vox-cdn.com/thumbor/5Tt4q0wseqcNTQIkpcBg7voGaMg=/0x0:2000x1386/1200x800/filters:focal(992x476:1312x796)/cdn.vox-cdn.com/uploads/chorus_image/image/69503392/MOWAS_MOBase_Dusk_Bed.0.jpg"
                    title="All Amenties Hotels" description="comfortable private places with room for friends and family" />
                <Card src="https://www.gannett-cdn.com/-mm-/f85d715f4ef18e245988237e803cdef2db1daf68/c=0-255-4256-2656/local/-/media/USATODAY/test/2013/10/25/1382729502000-160857233.jpg"
                    title="Top Hotels" description="Unique activities we can do together,
                led by a world of hosts."  />
            </div>

            <div className="home__section">
                <Card src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/69/9e/07/exterior.jpg?w=900&h=-1&s=1"
                    title="Search Novotel.india" description="Enjoy the amazing sights of Novotel in india" price="₹22,000/night" />
                <Card src="https://images.jdmagicbox.com/comp/hyderabad/s3/040pxx40.xx40.101106103552.y2s3/catalogue/taj-falaknuma-palace-falaknuma-hyderabad-5-star-hotels-w2d6tlo44o.jpg"
                    title="Taj Falaknama" description="Superhost with great amenties and Super effordable hotel now in Hyderabad" price="₹30,899/night" />
                <Card src="https://www.findmumbai.com/wp-content/uploads/2020/10/taj-mahal-palace-mumbai.png"
                    title="Taj Mahal Palace" description="Spaces that are more than just a place to sleep" price="₹32,999/night" />

            </div>
        </div>
    )
}

export default Home;
