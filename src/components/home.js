import './home.css'
import Me from '../img/me.PNG'
let Home = () => {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center h-100">
            <div className="d-flex flex-column align-items-center col-9 mb-3">
                <h1>Welcome To My Portfolio!</h1>
                <h2 style={{color: "#212121"}}>My name is Joshua Lamke and I am a senior studying computer science at GMU. I am passionate about web development and many other areas of computer science.</h2>
                <img src={Me} alt="" id="profile-img" style={{borderRadius: "50%", width: "600px", height: "auto"}}/>
            </div>
        </div>
    )
}

export default Home