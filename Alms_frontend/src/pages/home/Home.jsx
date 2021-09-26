import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/NavBar/Navbar'
import fd from './images/donate_food.jpg'
import fd1 from './images/food-donation1.jpg'
import fd2 from './images/food_donate2.jpg'
import fdonate from './images/fdonate.jpg'
import fdonate1 from './images/fdonate1.jpg'
import fdonate3 from './images/fdonate3.jpg'
import abstract from './images/abstract.png'
import ab_human from './images/ab_human.png'
import rain from './images/rain.jpg'
import waves from './images/waves.png'
import './home.css'
import { FcBusinessman, FcBusinesswoman,FcLike,FcVoicePresentation } from 'react-icons/fc';
import {FaHashtag} from 'react-icons/fa'


import phone from './images/phone.gif'
import { Button } from 'react-bootstrap'

const Home = () => {
    return (
       <>
        <Navbar > 
            <div className="phone fixed-top">
                <Link to="/chatbox"><img src={phone} alt="" /></Link>
            </div>
            <div className="sections">
                <div className="bg_img" >
                    <div className="bg_content">

                    <a  href="#how" ><button className="bg_button1 mb-3"> <h7> HOW YOU COULD HELP!</h7>  </button></a>
                        
                        <h1>Provide Well Being By Feeding The Hungry</h1>
                        <button className="bg_button2 mt-3"> LEARN MORE </button>

                    </div>

                    <div className="blur_div"></div>
                    
                </div>

                <div className="section2">
                    <div className="shrt_info mt-4">
                        
                        <div className="card " >
                            <div className="icons_reg" > <div className="icon1"><FcBusinesswoman  size="70"/> </div><div className="mt-3">/</div>  <div className="icon2"><FcBusinessman size="70"/></div> </div>
                           
                           <div className="card-body">
                               <h7>REGISTER YOURSELF</h7>
                            </div> 
                        </div>
                        <div className="card" >
                           <FcLike color="green" size="70"/>
                           <div className="card-body">
                               <h7>DONATE FOOD</h7>
                            </div> 
                        </div>
                        <div className="card" >
                           <FcVoicePresentation color="blue" size="70"/>
                           <div className="card-body">
                               <h7>COMMUNICATE</h7>
                            </div> 
                        </div>

                    </div>

                </div> 

                

                <div class="card-group">
                    <div class="card">
                        <img src={fd} class="card-img-top" alt="..."/>   
                        <div className="card-img-overlay "> <FaHashtag size="50"/> <br /> <h3>Hunger knows no friend,but it's need feeder</h3>   </div>   
                    </div>
                    <div class="card">
                        <img src={fd1} class="card-img-top" alt="..."/> 
                        <div className="card-img-overlay "> <FaHashtag size="50"/> <br /> <h3>You have the power to end hunger</h3>   </div>   
                    </div>
                    <div class="card">
                        <img src={fd2} class="card-img-top" alt="..."/>
                        <div className="card-img-overlay "> <FaHashtag size="50"/> <br /> <h3>One of the greatest feelings in the world is knowing that we as individuals can make a difference.</h3>   </div>    
                    </div>
                </div>
                
                <div id="how" className="section3">
                        <div className="card-image">
                            <img src={abstract} alt="" />
                        </div>
                        <h1>HOW COULD YOU HELP!</h1>
                        <div class="card mb-3 mt-3">
                                <div class="row g-0">
                                    <div class="col-md-6">
                                    <img src={ab_human} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title">HAVE LEFT OVER FOOD?</h5>
                                        <p class="card-text">Donate the left over food of any event through our platform to the needy and gather their good-wishes!!!</p>
                                    </div>
                                    </div>
                                </div>   
                        </div>
                </div> 

                <div className="section4 mb-5">
                    <div className="_3_crds" >
                        <div class="card" >
                            <img src={fdonate} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title bold"> FOOD LEFTOVER : MARRIAGE  </h5>
                                <p class="card-text">Ready to donate the food left from the marriage in our hall to the needy.</p>
                                <Link to="/chatbox"><Button variant="primary" className="button" >Contact</Button></Link>
                            </div>
                        </div>
                        <div class="card" >
                            <img src={fdonate1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title bold">FOOD LEFTOVER : HOTEL</h5>
                                <p class="card-text"> It will be great if someone need of food will accept this as soon as possible..</p>
                                <Link to="/chatbox"><Button variant="primary" className="button" >Contact</Button></Link>
                            </div>
                        </div>
                        <div class="card" >
                            <img src={fdonate3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title bold ">FOOD DONATE : GRAINS</h5>
                                <p class="card-text">If any organization who serves the food to needy can accept this.</p>
                                 <Link to="/chatbox"><Button variant="primary" className="button" >Contact</Button></Link>
                            </div>
                        </div>
                    </div>
                
                    <div className=" mt-5">
                    <Link to="/explore"><button type="button" class=" button btn-primary btn-lg">SEE MORE</button></Link>
                    </div>
                    

                </div>     
                
                <div className=" section5">
                    <img src={rain} alt="" />
                </div>

                <div className="section6">
                    <img src={waves} alt="" />
                </div>

                <div className="section7">

                </div>


            </div>      
                   
            
            
            
           
        </Navbar>    

</>
      
        
    )
}

export default Home
