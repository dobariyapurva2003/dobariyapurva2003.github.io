import React from "react";
import pic from "../src/pic.jpeg";
import stock from "../src/stock.jpg";
import student from "../src/student.jpg";
import news from "../src/news.jpg";
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
//import { FaPhone } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import LeafletMapComponent from "./LeafletMapComponent";
import Pro_card from "./Pro_card";
const Home = () => {

  function scrollToDiv(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <>



      {/* <h1 class="text-pink-600">hello from home</h1> */}
      <div className=" w-full h-20 flex place-items-center">
        <div className="shadow-example w-full h-full flex bg-slate-100 justify-end h-full" id="home">
          <div className="w-1/3 flex justify-row bg-slate-100  place-content-evenly items-center">
            <button onClick={()=>scrollToDiv("home")} className="text-pink-800 hover:text-2xl hover:text-pink-500 font-semibold text-xl">Home</button>
            <button onClick={()=>scrollToDiv("proj")} className="text-pink-800 hover:text-2xl hover:text-pink-500 font-semibold text-xl">Projects</button>
            <button onClick={()=>scrollToDiv("cont")} className="text-pink-800 hover:text-2xl hover:text-pink-500 font-semibold text-xl">Contacts</button>
          </div>
        </div>
      </div>

      <div className="flex">
          <div className="w-2/3 flex justify-center bg-slate-200">
               <div className="text-pink-800 ml-40 mr-60 my-20">
                <h1 className="w-full flex font-semibold text-5xl mb-5 text-right">Biography</h1>
                <div className="text-left text-xl text-pink-600">
                 I am currently studying M.Tech in 'Computer Science and Information Security' at IIIT, Hyderabad.
                  I have done my B.Tech in 'Information Technology' at 'Dharmsinh Desai University', Gujarat in 2024.
                  During my undergraduate studies, I developed a keen interest in 'Information security', 
                  which has guided my current cademic pursuits.
                  <br></br><br></br>
                  I possesses strong skills in programming languages such as C++, React js, Node js. 
                  I have done work with various tools and technologies, including Git, AWS. 
                  In addition to my academic pursuits, I have gained practical experience 
                  through internships and hackathons. These experiences have provided me with valuable 
                  insights into the industry and enhanced my problem-solving skills.
                  Upon completion of my M.Tech program, I aspires to contribute to innovative research in Information security, work in a leading technology firm.
                  I am passionate about Artificial Intelligence, Machine learning, Cyber security and is dedicated to making meaningful contributions to the field of computer science.
                  <br></br><br></br>
                  Outside of my academic and professional life, I enjoys 
                  reading science fiction, participating in coding competitions, classical dance. 
                  I believes in a well-rounded approach to 
                  life and values the balance between work and personal interests.
                  This website is built by using 'React js' and 'Tailwind CSS' only for front-end purpose.
                </div>
              </div>
          </div>
          <div className="w-1/3 flex justify-center bg-slate-200">
            <div className="bg-slate-200 flex flex-col">
              <div className="bg-slate-200 flex flex-col justify-center place-items-center">
                <img src={pic} alt="picture" className="rounded-full h-1/2" />
                <div className="mt-10">
                  <h1 className="text-3xl text-pink-800 font-semibold">Purva Dobariya</h1>
                </div>

                {/* logos */}

                <div className="text-pink-500 my-10 flex flex-row text-4xl place-content-center">
                  {/* logos */}
                  <a className="mx-3" href="https://github.com/dobariyapurva2003">
                    <RxGithubLogo />
                  </a>
                  <a className="mx-3" href="https://www.linkedin.com/in/purva-dobariya-59a998227/">
                    <RxLinkedinLogo />
                  </a>
                  <a className="mx-3" href="https://www.facebook.com/profile.php?id=61562970035319">
                    <ImFacebook2 />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
      </div>

      {/* For project */}
      <div id="proj" className="bg-slate-200 h-full pt-20">
        <div className="flex justify-center">
          <h1 className="text-5xl text-pink-800 font-semibold">Projects</h1>
        </div>
        <div className="flex mt-36">
          
          <Pro_card name="Stock managment portal" picture={stock} content="Website which helps to spread 
          awareness for stock-market to share holders or investors.This website shows stock prices and 
          changes in prices by graphically. Also user can like or save wanted information of particular
          company" link="https://github.com/my1243/BTB---Stock-Management"  />
        
          <Pro_card name="Student egov website" picture={student} content="Website makes egov student portal 
          more attractive and colourful.This website also provide functionality for students by which they
           can view their fees payment status, Exam schedule, previous semester results, profile."
           link="https://github.com/my1243/egovportal" />

          <Pro_card name="Personalized News portal" picture={news} content="Website which helps users for getting 
          articles according to their choice. This website provides services for authenticated 
          users by which they can also like and save news articles.Also they can raise their query by contact us"
          link="https://github.com/dobariyapurva2003/Intern_project" /> 
          
        </div>
      </div>


      {/* For contact */}
      <div className="flex pt-20 bg-slate-200" id="cont">
          
      <div className="w-1/2 flex justify-center bg-slate-200">
          <div className="text-pink-800 mr-40 ml-60 my-20">
                <h1 className="w-full flex font-semibold text-5xl mb-5 text-left">Contact</h1>
              </div>
          </div>


          <div className="w-1/2 flex justify-end ">
            <div className="bg-slate-200 pt-10 mr-40 flex flex-col ">
              <div className="my-8 flex place-items-center">
              <div className="text-4xl text-pink-500">
                <MdEmail />
               </div>
               <div className="ml-10 text-xl text-blue-600 cursor-pointer hover:border-b-2 hover:border-blue-600">
                purvadobariya9@gmail.com
               </div>
               
              </div>
              <div className="mb-8 flex place-items-center">
                <div className="text-4xl text-pink-500">
                {/* <FaPhone /> */}
                <BsFillTelephoneFill />
                </div>
                <div className="ml-10 text-xl text-blue-600 cursor-pointer hover:border-b-2 hover:border-blue-600">
                  +917778862806
                </div>
              </div>
              <div className="mb-8 flex place-items-center">
                <div className="text-4xl text-pink-500">
                <FaLocationDot />
                </div>
                <div className="ml-10 text-xl text-pink-600">
                  IIIT Hyderabad, Gachibowli, Telangana, 500032.
                </div>
              </div>
              <div className="mb-10">
                      <LeafletMapComponent />
              </div>
            </div>
          </div>
         
      </div>


      {/* For footer */}
      <div className="shadow-inner shadow-black w-full h-20 flex place-items-center">
        <h1 className="text-lg text-pink-500 flex place-content-center justify-center w-full">
          © 2024 Thanks for visiting our website!</h1>
      </div>
    </>
  )
};

export default Home;