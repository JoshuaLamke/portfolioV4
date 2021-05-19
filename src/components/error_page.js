import './error_page.css'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
let ErrorPage = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" id="error-page-container">
            <div className="d-flex align-items-center col-9 flex-column">
                <h1 style={{color: "white"}}>404: This Page Does Not Exist</h1>
                <button className="btn bg-light" id="error-page-home-button" onClick={() => {setClicked(true)}}>
                    Home
                </button>
            </div>
            {clicked ? <Redirect to="/"/> : null}
        </div>
    )
}

export default ErrorPage