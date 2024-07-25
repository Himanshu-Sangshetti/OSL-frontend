import React, { useEffect, useState } from 'react'
import { apiUrl, filterData } from './FilterData'
import { toast } from "react-toastify";
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Filter from './Filter';
import ContentTable from './ContentTable';
import { FaLink } from "react-icons/fa";
import TeamSection from './TeamSection';
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Content = () => {
  const navigate = useNavigate();
  const Team = () => navigate('/TeamSection');


  const [featuredata, setfeaturedata] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);
  const [linkdata, setlinkdata] = useState([]);
  const [showToast,setShowToast] = useState(false);



  async function fetchlinkdata() {
    setloading(true);
    try {
      const newresult = await axios.get('https://OSL-backend.chickenkiller.com/api/addLinks/getAllLinks');
      console.log("Data :",newresult.data);
      setlinkdata(newresult.data.data);
      

    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setloading(false);
  }


  async function fetchdata() {
    setloading(true);
    try {
      const result = await axios.get(apiUrl);
      // console.log(result.data);
      setfeaturedata(result.data.data);
      if(result.data.data){
        setShowToast(true);
      }
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setloading(false);
  }


  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    fetchlinkdata();
  }, []);

  const BookData = linkdata ? linkdata.filter((data) => data.linkType === "Books") : [];
  const OtherResourcesData = linkdata ? linkdata.filter((data) => data.linkType === "Other Resources") : [];

  console.log(BookData);
  console.log(OtherResourcesData);
  return (
    <>
      <div className='Background'>
        <div className='Page'>
          <div className='mainpage'>
            <div className='Uppermostmainpage'>
              <div className='Upperbody'>
                <div className='Upperbody-text'>
                  WELCOME To the operating Systems Virtual Lab by Pune Institute Of Computer Technology
                </div>
              </div>
            </div>

            <div className='Upper-mainpage'>
              <div className='info'>
                {/* <div className='Video'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/krzXKGKM0hg?si=3kz0a8EnGCAMMGIC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> */}
                <div className='info1'>
                  <div className='heading'>
                    Vision
                  </div>
                  <div className='writeup'>To revolutionize the way students learn and master operating systems by providing a cutting-edge virtual lab platform that empowers them with comprehensive resources, practical exercises, and real-world simulations, Interview Question,fostering a deeper understanding and proficiency in operating system concepts.</div>
                </div>
                <div className='info1'>
                  <div className='heading'>
                    Mission
                  </div>
                  <div className='writeup'>
                  Our mission is to create a centralized and accessible virtual lab environment, that serves as a dynamic hub for students to explore, experiment, and engage with operating system principles. By offering a curated collection of resources, interactive exercises, and administrative tools, we aim to enhance learning outcomes, facilitate exam preparedness, and inspire a lifelong passion for exploring the intricate workings of operating systems. Through innovation, collaboration, and a commitment to excellence, we strive to empower students with the knowledge and skills they need to succeed in today's technology-driven world.</div>
                </div>
              </div>
              {/* <div className="main-content"> */}
              {/* <div className='Navbar2'>
                          <div className='Navigationbar'>
                              <div className='menus'>Option 1</div>
                              <div className='menus'>Option 2</div>
                              <div className='menus'>Option 3</div>
                              <div className='menus'><span  onClick={Team}>About US</span></div>
                          </div>
                        </div>  */}
              <div className="main-content">
                <div className='filterdata'>
                  <Filter filterData={filterData} category={category} setcategory={setcategory}></Filter>

                </div>
                <div className="table-main">
                  {
                    loading ? (<Spinner></Spinner>) : (<ContentTable setfeaturedata={setfeaturedata} featuredata={featuredata} category={category}
                      showToast={showToast} 
                    ></ContentTable>)
                  }
                </div>
                {/* </div> */}
              </div>
            </div>

            <div className='Other-resources'>
              <div className='heading'>Books</div>
              <div className='new'>

                {/* <a href="https://pages.cs.wisc.edu/~remzi/OSTEP/">  Operating Systems: Three Easy Pieces</a> */}
                {BookData.map((data) => (
                  <a className="video" href={data.link} target="_blank" rel="noopener noreferrer">
                    <div className='textbody'>
                      <FaLink /><div> {data.title}</div>  </div></a>

                ))}

                {/* <div className='textbody'>
                    <FaLink /><a href="http://www.cs.ukzn.ac.za/~hughm/os/notes/os.pdf">Operating System: An introduction to Unix,
and Operating Systems Theory</a>

                    </div> */}
              </div>
            </div>
            <div className='Other-resources'>
              <div className='heading'>Other Important Resources</div>
              <div className='new'>
                {OtherResourcesData.map((data) => (
                  <a className="video" href={data.link} target="_blank" rel="noopener noreferrer">
                    <div className='textbody'>
                      <FaLink /><div> {data.title}</div>  </div></a>

                ))}
                {/* <div className='textbody'>
                    <FaLink /><a href="https://www.geeksforgeeks.org/last-minute-notes-operating-systems/">Last Minute Notes – Operating Systems</a>
                    </div> */}

                {/* <div className='textbody'>
                    <FaLink /><a href="https://drive.uqu.edu.sa/_/mskhayat/files/MySubjects/2017SS%20Operating%20Systems/Abraham%20Silberschatz-Operating%20System%20Concepts%20(9th,2012_12).pdf">Operating System Concepts</a>
                    </div>
                    <div className='textbody'>
                    <FaLink /><a href="https://www.geeksforgeeks.org/operating-systems-interview-questions/">Top 100 Operating System Interview Questions</a>
                    </div>
                    <div className='textbody'>
                     <FaLink /><a href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p">Videos</a>
                    </div> */}

              </div>
            </div>
            <hr />
            <div>
              <TeamSection></TeamSection>
            </div>
            <div className='Lower-mainpage'>
              <div className='LongBar'>
                <div className='contact'>
                  <div className='Lower-header'>
                    Contact Us
                  </div>
                  <div className='Lower-body'>
                    Phone No:+91 20 24364741
                    <br></br>
                    E-mail : registrar@pict.edu
                  </div>
                </div>
                <div className='links'>
                  <div className='Lower-header'>
                    Address
                  </div>
                  <div className='Lower-body'>
                    Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043
                  </div>

                </div>
                <div className='Social-media'>
                  <div className='Lower-header'>
                    Follow Us
                  </div>
                  <div className='Lower-body'>
                    <a href='https://www.linkedin.com/school/pune-institute-of-computer-technology/' target='_blank'>
                      <LuLinkedin className='size' />
                    </a>
                    <a href='https://www.instagram.com/pict.pune/' target='_blank'>
                      <FaInstagram className='size' />
                    </a>
                    <a href='https://twitter.com/PunePict' target='_blank'>
                      <FaTwitter className='size' />
                    </a>
                    <a href='https://www.facebook.com/PICTOfficial' target='_blank'>
                      <FaFacebookF className='size' />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Content