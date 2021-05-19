import './about.css'
import deer from '../img/deer.PNG'
import hiking from '../img/hiking.PNG'
let About = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center py-5">
                <h1>About Me</h1>
            </div>
            <div className="container">
                <div id="background-container">
                    <div className="row d-flex justify-content-center py-5 px-3">
                        <h2 className="title-to-section">Background</h2>
                    </div>
                    <div className="row px-3 pb-5">
                        <p> 
                            I am a native of Centreville, Virginia near the DC metropolitan area. 
                            I'm very passionate about coding. I started thinking about going into the field of Computer Science 
                            in my senior year of high school. So I decided to spend my first year after graduating high school attending Northern Virginia 
                            Community College (NOVA) to see if Computer Science was what I wanted to do. This is when I first began coding and learning Java.
                            I thoroughly enjoyed my time at NOVA studying Computer science, so I decided to transfer to George Mason after I completed my
                            first year at NOVA. From that point on I knew that Computer Science was for me. It is an interesting and challenging field, and
                            I was constantly learning new things.
                        </p>
                    </div>
                </div>
                <div id="hobbies-container" className="container-fluid">
                    <div className="row d-flex justify-content-center py-5 px-3">
                        <h2 className="title-to-section">Hobbies</h2>
                    </div>
                    <div className="container pb-3">
                        <div className="row pb-5">
                            <p> 
                                I love to go out and hike and see all that nature has to offer. I have hiked several mountains in the Northern Virginia
                                area and in the future I would like to hike even bigger mountains across the U.S. and internationally.
                                I also love to swim, currently I work at Life Time Fitness as a swim instructor teaching children and adults
                                proper swimming technique for the four main swimming strokes. I also teach them how to get over their fear of the 
                                water and how to swim safely. My favorite hobby however is weightlifting. I have been weightlifting since I was around
                                15 years old and love getting stronger and bettering myself.
                            </p>
                        </div>
                        <div className="container d-flex justify-content-between pb-3" id="img-container">
                            <div className="d-flex justify-content-center pb-1">
                                    <img src={deer} alt="" id="deer-img" />
                            </div>
                            <div className="d-flex justify-content-center pb-1">
                                    <img src={hiking} alt="" id="hiking-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About