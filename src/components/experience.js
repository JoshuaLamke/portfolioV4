import './experience.css'
let Experience = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center pt-3">
                <h1>Work Experience</h1>
            </div>
            <div className="container d-flex flex-column align-items-start pt-5">
                <div className="row flex-column">
                    <h3>Colvin Run - Cybersecurity Intern</h3>
                    <h5>Date Worked: 02/14/21 - 06/01/21</h5>
                    <ul className="px-5">
                        <li className="list-ex">Created a proof of concept web application using React and Redux to model detection of threats in microchips.</li>
                        <li className="list-ex">Used python and pandas to conduct analysis on data regarding vulnurabilities in products from different technology vendors.</li>
                        <li className="list-ex">Created a REST API using Express.js that interacts with an sqlite database holding a list of technology vulnurabilities.</li>
                    </ul>
                </div>
            </div>
            <div className="container d-flex flex-column align-items-start pt-5">
                <div className="row flex-column">
                    <h3>HKP Solutions - Web Development Intern</h3>
                    <h5>Date Worked: 12/15/20 - 1/28/21</h5>
                    <ul className="px-5">
                        <li className="list-ex">Created an e-commerce application with a small team using React and Redux.</li>
                        <li className="list-ex">Created a new website for the company with a small team using React.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;
