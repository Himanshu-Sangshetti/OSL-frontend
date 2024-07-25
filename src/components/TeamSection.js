// TeamSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMemberCard from './TeamMemberCard';
import "../styles/TeamSection.css"
import vijay from "../components/assets/TeamsPhoto/vijay2-modified.png"
import kavita from "../components/assets/TeamsPhoto/kavita_photo-modified.png";
import sahil from "../components/assets/TeamsPhoto/sahil_photo-modified.png";
import Rushikesh from "../components/assets/TeamsPhoto/rushi_photo-modified.png";
import shankar from "../components/assets/TeamsPhoto/shankar_photo-modified.png";
import Rachna_mam from "../components/assets/TeamsPhoto/rachna mam-modified.png";
import shweta_mam from "../components/assets/TeamsPhoto/Swwetw_ photo-modified.png";
const teamMentor = [
  { name: 'Rachna Karnavat', role: 'Teacher', image: Rachna_mam, linkedin: 'https://www.linkedin.com/in/rachna-c-631a0916/',
      git: 'https://github.com/RachnaKarnavat', },
  { name: 'Dr. Shweta Dharmadhikari', role: 'Teacher', image: shweta_mam, linkedin: 'https://www.linkedin.com/in/shwetacd/',
  git: '', },
 
];
const teamMembers = [
  { name: 'Vijay Kumar', role: 'Frontend Developer', image: vijay, linkedin: 'https://www.linkedin.com/in/vijay-kumar-437b51230/',
  git: 'https://github.com/vijaykumar2892002', },
  { name: 'Sahil Jagadale', role: 'Backend Developer', image: sahil, linkedin: 'https://www.linkedin.com/in/sahil-jagadale-b8b447258/',
  git: 'https://github.com/Sahil-Jagadale', },
  { name: 'Rushikesh Dhaygude', role: 'Backend Developer', image: Rushikesh, linkedin: 'https://www.linkedin.com/in/rushikesh-dhaygude-a3a0b71a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  git: 'https://github.com/RushikeshDhaygude', },
  { name: 'Kavita Thete', role: 'Backend Developer', image: kavita, linkedin: 'https://www.linkedin.com/in/kavitathete',
  git: 'https://github.com/Kavitat17', },
  { name: 'Shankar Pawar', role: 'Frontend Developer', image: shankar ,linkedin: 'https://www.linkedin.com/in/shankar-pawar-281b01212/',
  git: 'GitHub- https://github.com/spawar955 ', },
  
  
  
];

const TeamSection = () => {
  return (
    
    <> <div className="our-team"  sm={12} md={4}><h1>Our Team</h1></div>
    <div className='team-section'>
    <div className='row1'>
    <Container > 
      <Row className='d-flex justify-content-center'>
        {teamMentor.map((member, index) => (
          <Col key={index} sm={12} md={4} lg={4}>
            <TeamMemberCard 
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              git={member.git}
            />
          </Col>
        ))}
      </Row>
      </Container>
      </div>
    
      <div className='row1'>
    <Container >
      <Row className='d-flex justify-content-center'>
        {teamMembers.map((member, index) => (
          <Col key={index} sm={12} md={4} lg={4}>
            <TeamMemberCard
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              git={member.git}
            />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    </div>
    </>
  );
};

export default TeamSection;
