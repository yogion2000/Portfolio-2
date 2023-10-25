import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import './Home.css'
import  Profile from'./assets/hacker (1).png'
import Aboutpic from './assets/phishing.png'
import Edupic from './assets/student.png'
import Html from './assets/html.png'
import Css from './assets/css.png'
import Js from './assets/js-format.png'
import Atom from './assets/atom.png'
import Boot from './assets/bootstrap.png'
import Cpro from './assets/letter-c.png'
import Ps from './assets/psd.png'
import Corel from './assets/corel.png'
import Ai from './assets/ai-file.png'
import ID from './assets/indesign.png'
import Figma from './assets/figma.png'
import Dw from './assets/dreamweaver.png'
import Cor1 from './assets/achievement0.jpg'
import Cor2 from './assets/achievement1.jpg'
import Cor3 from './assets/achievement2.jpg'
import Cor4 from './assets/achievement3.jpg'
export function Home(){
    return(
              <div className="container">
        <div className="mb-5 mt-5" style={{border:"0"}}>
        <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12 col-12 order-sm-2 d-flex justify-content-center" >
                <img src={Profile} className="img-fluid rounded-start" alt="..." width="400px"/>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12 col-12 order-sm-1 d-flex align-items-center justify-content-center">
                <div className="body d-flex justify-content-center flex-column align-items-center">
                  <h5 className="title ho1 animated-text">Yogesh R</h5>
                  <p className="text profession">UI-Designer</p>
                  <a className="btn resume-view" href="https://drive.google.com/file/d/11sW7C0Dcp53erO5zIDrYtIXFe-TNZcs8/view?usp=drivesdk " role="button" target="_blank">View Resume</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}
export function About(){
    return(
        <div className="container info"id="about">
        <div className="mb-3 mt-5" style={{border:"0"}}>
          <div className="row">
                <div className="col-xl-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center" >
                  <img src={Aboutpic} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-xl-8 col-md-8 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                  <div className="body d-flex justify-content-center flex-column align-items-center">
                    <h5 className="title head-purple sliding-heading ">About Me</h5>
                    <p className="text about-text">Versatile, user-centric graphic designer, web designer, and developer
                      with a flair for seamless integration, innovation, and holistic design
                      thinking. Skilled in creating interactive and visually captivating
                      websites that prioritize user experience. A problem solver who bridges
                      the gap between creativity and technical expertise to deliver
                      outstanding digital solutions.
                      </p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
}
export function Education(){
    return(
        <div className="container" id="education">
        <div className="mb-3 mt-5" style={{border:"0"}}>
          <div className="row">
                <div className="col-xl-4 col-md-4 col-sm-12 col-12 order-sm-2 d-flex justify-content-center" >
                  <img src={Edupic} className="img-fluid rounded-start" alt="..." width="400px"/>
                </div>
                <div className="col-xl-8 col-md-8 col-sm-12 col-12 order-sm-1 d-flex align-items-center justify-content-center">
                  <div className="body d-flex justify-content-center flex-column align-items-center">
                    <h5 className="title ho1 head-white mt-4 sliding-heading">Education</h5>
                    <div className=" container-fluid row mt-3">
                      <div className="col-lg-4">
                        <p className="edu1">B.Tech Textile Technology</p>
                        <p className="edu2">K.S.Rangasamy College Of Technology</p>
                        <p className="edu3">2019-2023</p>
                        <p className="edu3">CGPA:9.3</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="edu1">Higher Secondary School</p>
                        <p className="edu2">Vimala Maric Hr Sec School</p>
                        <p className="edu3">2018-2019</p>
                        <p className="edu3">Percentage:81.5</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="edu1">Secondary School</p>
                        <p className="edu2">Vimala Maric Hr Sec School</p>
                        <p className="edu3">2016-2017</p>
                        <p className="edu3">Percentage:96.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
}

export function Technical(){
    return(
        <div className="container mt-5 mb-3 pt-5 pb-5" id="technical">
        <p className="head-purple mt-4 sliding-heading">Technical Skills</p>
        <div className="row">
          <img className="col-lg-2 col-4 mt-2" src={Html} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Css} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Js} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Atom} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Boot} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Cpro} alt=""/>
        </div>
      </div>
    );
}

export function Designing(){
    return(
        <div className="container mt-5 mb-3 pt-5 pb-5" id="design">
        <p className="head-white mt-4 sliding-heading">Designing Skills</p>
        <div className="row">
          <img className="col-lg-2 col-4 mt-2" src={Ps} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Corel} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Ai} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={ID} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Figma} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Dw} alt=""/>
        </div>
      </div>
    );
}

export function Certifications(){
    return(
        <div className="container" id="certificate">
        <p className="head-purple mt-4 sliding-heading">Certifications</p>
        <div className="row">
        <div className="mt-3 col-lg-6 col-sm-12">
          <div className="card ">
            <img src="https://www.simplilearn.com/ice9/skillupcertificates/Introduction-to-Front-End-Development.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-white">Front End Development</h5>
              <a href="https://www.simplilearn.com/front-end-developer-free-course-skillup" target="_blank" className="btn cred-btn">Credential</a>
            </div>
          </div>
        </div>
        <div className="mt-3 col-lg-6 col-sm-12">
          <div className="card ">
            <img src="https://www.simplilearn.com/ice9/skillupcertificates/Introduction-to-Front-End-Development.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-white">Back End Development</h5>
              <a href="https://www.simplilearn.com/front-end-developer-free-course-skillup" target="_blank" className="btn btn-primary cred-btn">Credential</a>
            </div>
          </div>  
        </div>     
      </div>
    </div>
    );
}

export function Achievements(){
    return(
        <div className="container" id="achievements">
        <p className="head-white mt-4 sliding-heading">Achievements</p>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Cor1} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="carousel-head">Best Outgoing Student</h5>
                <p className="carousel-body">Awared as the best outgoing student by K.S.Rangasamy College of Technology-2023</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Cor2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="carousel-head">Best Student Learner</h5>
                <p className="carousel-body">Awared as the best student learner for more NPTEL certifications by K.S.Rangasamy College of Technology-2022</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Cor3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="carousel-head">Precitex Award</h5>
                <p className="carousel-body">Awared as the best student in textile spinning technology by  Precision Rubber Industries Pvt. Ltd</p>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={Cor4} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="carousel-head">Best Outgoing Student</h5>
                <p className="carousel-body">Awared as the best outgoing student by K.S.Rangasamy College of Technology, Department of Textile Technology-2023</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
}

export function Projects(){
    return(
        <div className="container mt-5 mb-3 pb-5 pt-5" id="project">
        <p className="head-purple pt-5 sliding-heading">Projects</p>
        <marquee behavior="" direction="" className="text-white">Under Construction</marquee>
      </div>
    );
}

export function Contact(){
    return(
        <div className="container" id="contact">
        <p className="head-white mt-3 sliding-heading">Contact me</p>
        <div className="row">
          <div className="mb-3 col-lg-6 d-flex flex-column justify-content-center">
            <div className="mb-3">
              <img src="https://cdn-icons-png.flaticon.com/128/8898/8898833.png" alt="" width="30px"/>
              <p className="contact" style={{display:"inline"}}>yogion2000@gmail.com</p>
            </div>
            <div className="mb-3">
              <img src="https://cdn-icons-png.flaticon.com/128/3814/3814365.png" alt="" width="30px"/>
              <p className="contact"  style={{display:"inline"}}>9514777920</p>
            </div>
            <div className="mb-3">
              <img src="https://cdn-icons-png.flaticon.com/128/1433/1433265.png" alt="" width="30px" style={{display:"inline"}}/>
              <p className="contact" style={{display:"inline"}}>138/1b gandhiji street annamar theater north side chennimalai erode-638051</p>
            </div>
          </div>
            <div className=" mb-3 col-lg-6">
              <p className="contact-form">Get in Touch</p>
              <form action="mailto:yogion2000@gmail.com" method="post" enctype="text/plain">
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="name">Name</label>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Name" aria-label="name" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="number">Ph.no</label>
                </div>
                <div className="col">
                  <input type="tel" className="form-control" placeholder="10 digit number" aria-label="number" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="mail">Mail</label>
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="***@gmail.com" aria-label="mail" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="query">Query</label>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Write your Query" aria-label="query" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <input type="submit" className="form-control submit-btn" value="send"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
    );
}