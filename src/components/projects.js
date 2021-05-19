import weather from "../img/Weather-App.PNG"
import recipe from "../img/recipe-app-login.PNG"
import eCommerce from "../img/E-Commerce-App.PNG"
import {Carousel} from 'react-bootstrap'
let Projects = () => {
    return (
        <div className="container d-flex flex-column pt-3">
            <div className="d-flex justify-content-center">
                <h1 className="py-2">Projects</h1>
            </div>
            <Carousel className="carousel-projects" fade={true} prevLabel="" nextLabel="">
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={weather}
                    alt="weather application"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={recipe}
                    alt="recipe application"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={eCommerce}
                    alt="e-commerce application"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="row d-flex flex-column align-items-center py-2">
                <h2>Weather App</h2>
                <p>
                    This app allows you to input an address and find the weather at that address. 
                    It does this by sending the location to a location API to get the
                    longitude and latitude, and then it sends those coordinates into a weather API to get 
                    the weather. Made using Node, Javascript, HTML, and CSS.
                </p>
            </div>
            <div className="row d-flex flex-column align-items-center py-2">
                <h2>Recipe App</h2>
                <p>
                    This app allows the user to store all of their favorite recipes. The users either has to log in or sign up
                    to have access to the application. The recipes are stored to a postgres database on heroku and the application frontend is hosted on Netlify. 
                    This application also uses express for the server. Made using Node, SQL, CSS, HTML, and Javascript. The database is on Heroku so logging in will take a bit of time but afterwards everything will work normally.
                </p>
            </div>
            <div className="row d-flex flex-column align-items-center py-2">
                <h2>E-Commerce App</h2>
                <p>
                    This app is a mock version of a shopping application. You can login or signup and enter the app to shop around for items.
                    You can click on each individual items and select how many you want. Then you can add it to your cart. Then you can checkout which will just
                    clear all items from your cart. Since this is a mock shopping app it has no payment processing. To add new items or edit and delete items you can log in as an admin.
                    The admin email is admin@test.com and the password is admin. When logging in with these credentials, you will be able to add, edit and delete items from the store.
                    These changes will be reflected in the all normal user's application once the react component re-renders. The frontend of this app is built 
                    using React, Redux, and Node. The backend is built using MongoDB and Node/Express. The backend is on Heroku and stores pictures there so any uploaded pictures will be 
                    deleted after a day or whenever the backend restarts.
                </p>
            </div>
        </div>
    )
}

export default Projects;
