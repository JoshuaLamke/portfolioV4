import Javascript from '../img/javascript.png'
import HTML from '../img/html.png'
import Bootstrap from '../img/bootstrap.png'
import CSS from '../img/css.png'
import REACT from '../img/react.png'
import JAVA from '../img/java.png'
import C from '../img/c.png'
import SQL from '../img/sql.jpg'
import NODE from '../img/node.jpg'
let Skills = () => {
    return (
        <div>
            <div className="d-flex justify-content-center container py-5">
                <h1>My Skills</h1>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src={Javascript} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/></a>
                            <h4>JavaScript</h4>
                            <p>JavaScript is a object oriented programming language that is used inside of web browsers. I have been learning and using JavaScript for over a year. I have made many websites using JavaScript and love learning all of the different applications of it.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"><img src={HTML} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/></a>
                            <h4>HTML</h4>
                            <p>HTML is a markup language for documents to be displayed in a web browser. I have been using HTML for over a year. It is super easy to pick up and a necessity to create a basic webpage layout.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <div>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"><img src={CSS} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/></a>
                                <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noreferrer"><img src={Bootstrap} alt="" style={{width: "70px",height: "70px", borderRadius: "50%"}}/></a>
                            </div>
                            <h4>CSS/Bootstrap</h4>
                            <p>CSS is a web styling language that allows you to format the layout of Web pages. Bootstrap is a CSS framework directed at responsive, mobile first web development. I have been using Bootstrap and CSS for over a year. The combination of Bootstrap and CSS has helped me create the websites here on my portfolio as well as this portfolio itself.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer"><img src={NODE} alt="" style={{width: "60px",height: "60px", borderRadius: "50%"}}/></a>
                            <h4>Node.js</h4>
                            <p>Node.js is a JavaScript runtime environment that uses the V8 JavaScript engine. I have used Node.js for many projects and love using the express npm package for making REST API's. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer"><img src={REACT} alt="" style={{width: "60px",height: "60px", borderRadius: "50%"}}/></a>
                            <h4>React</h4>
                            <p>React is an open-source front-end JavaScript library for building user interfaces or UI components. I have been using React for a little bit under a year. I love the modularity and reusability that it brings with its component architecture. I am still trying to learn and grow my React skills which is why this portfolio is made using React.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noreferrer"><img src={JAVA} alt="" style={{width: "60px",height: "60px", borderRadius: "50%"}}/></a>
                            <h4>Java</h4>
                            <p>Java is an Object Oriented Programming language that is very versitile and popular. I have been using Java for over 3 years now. It was the first language I ever learned and I have coded many projects in it. Learning Java helped me learn about the principles of object oriented programming.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <a href="https://devdocs.io/c/" target="_blank" rel="noreferrer"><img src={C} alt="" style={{width: "60px",height: "60px", borderRadius: "50%"}}/></a>
                            <h4>C</h4>
                            <p>C is an older language used mainly for systems programming as it is able to interact with the operating system at a low level. I have been using C for over a year now and although it was a more difficult language to learn. However, it allows you to do things that other languages cannot.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 py-2">
                        <div className="d-flex flex-column align-items-center">
                            <a href="https://docs.oracle.com/cd/B28359_01/server.111/b28286/toc.htm" target="_blank" rel="noreferrer"><img src={SQL} alt="" style={{width: "60px",height: "60px", borderRadius: "50%"}}/></a>
                            <h4>SQL</h4>
                            <p>SQL is a database programming language for relational databases. I have been using SQL for a little under a year. It is easy to use and it has allowed me to incorporate relational databases into my programming projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
