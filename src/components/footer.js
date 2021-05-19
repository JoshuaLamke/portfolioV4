import './footer.css'
import githubImage from '../img/GitHub-Mark.png'
import LinkedinLogo from '../img/Linkedin.png'
import GmailLogo from '../img/gmail.png'
import PhoneIcon from '../img/phone.htm'
let Footer = () => {
    return (
        <div id="main-footer" className="container-fluid pb-3" style={{color: "#222222", background:"#1976D2", borderTop: "1px solid #222222"}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="py-2"><u>Contact Me</u></h4>
                        <ul>
                            <div className="d-flex">
                                <img src={PhoneIcon} alt="" style={{width: "25px",height: "25px", borderRadius: "50%"}}/>
                                <p style={{color: "#212121", marginLeft: "5px"}}>703-870-9362</p>
                            </div>
                            <div className="d-flex">
                                <a href="https://gmail.com" target="_blank" rel="noreferrer"><img src={GmailLogo} alt="" style={{width: "25px",height: "25px", borderRadius: "50%"}}/></a>
                                <p style={{color: "#212121", marginLeft: "5px"}}>joshua.lamke@gmail.com</p>
                            </div>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="py-2"><u>Github</u></h4>
                        <a href="https://github.com/JoshuaLamke" target="_blank" rel="noreferrer"><img src={githubImage} alt="" style={{width: "30px",height: "auto", borderRadius: "50%", marginRight: "5px"}}/></a>
                        <a href="https://github.com/JoshuaLamke" target="_blank" rel="noreferrer">My Github</a>
                    </div>
                    <div className="col">
                        <h4 className="py-2"><u>LinkedIn</u></h4>
                        <a href="https://www.linkedin.com/in/joshua-lamke-742166166/" target="_blank" rel="noreferrer"><img src={LinkedinLogo} alt="" style={{width: "30px",height: "auto", marginRight: "5px"}}/></a>
                        <a href="https://www.linkedin.com/in/joshua-lamke-742166166/" target="_blank" rel="noreferrer">My LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;