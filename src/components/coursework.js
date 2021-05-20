import ONE from '../img/one.PNG'
import TWO from '../img/two.PNG'
import THREE from '../img/three.PNG'
import FOUR from '../img/four.PNG'
import FIVE from '../img/five.PNG'
import SIX from '../img/six.PNG'
import SEVEN from '../img/seven.PNG'
import EIGHT from '../img/eight.PNG'
let Coursework = () => {
    return (
        <div className="container d-flex flex-column align-items-center pt-3">
            <div className="d-flex justify-content-center">
                <h1>Relevant Coursework</h1>
            </div>
            <div className="pt-3 w-100">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={ONE} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS211: Object Oriented Programming</h4>
                        <p>Language: Java</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={TWO} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS321: Software Engineering</h4>
                        <p>Language: JavaScript</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={THREE} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS450: Database Concepts</h4>
                        <p>Languages: Java, SQL, MQL(MongoDB Query Language)</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={FOUR} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS480: Intro To Artificial Intelligence</h4>
                        <p>Language: N/A</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={FIVE} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS483: Analysis Of Algorithms</h4>
                        <p>Language: N/A</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={SIX} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS367: Computer Systems And Programming</h4>
                        <p>Languages: C, Assembly</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={SEVEN} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS310: Data Structures</h4>
                        <p>Language: Java</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-3" style={{textAlign: "center"}}>
                        <img src={EIGHT} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} className="mb-2"/>
                        <h4>CS330: Formal Methods And Models</h4>
                        <p>Language: N/A</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coursework