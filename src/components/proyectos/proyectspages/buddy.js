import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Reveal from 'react-reveal/Reveal'
import { Link } from 'react-router-dom'
import Loading from '../../../Loading'
import buddyvideo from './buddyvideo.gif'
function Buddy() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
     <> 
{loading == false ? <Reveal>

<section className='about-main'>
      <Container fluid className='justify-content-left'>
        
        <Row className="justify-content-left main-letters">
          <Col xs={12} md={12} lg={12} xl={6}>
            <section >
        <h1 className='sectiontitle'>BuddyAPP</h1>
             <h2>
             Application to help animal associations to promote their animals, mainly dogs, so that you decide to adopt rather than buy
               </h2>
             <h2>
             Made with React (CRUD), Node.js and using google maps API, nodemailer, cloudinary, MongoDB and chartJS.
             </h2>

            </section>
          </Col>
          <Col className='' xs={0} md={12} lg={12} xl={6}>
             
             <img className='gif' src={buddyvideo} alt='gif'/>
        
          </Col>
          <Col className='main-buttons'>
          
              
          </Col>
        </Row>

      </Container>
      <section className='whiting'>
      <Link to='/guillermo-Conde-Portfolio/proyects'>Back</Link>

      </section>
      </section>
</Reveal>  : <Loading/>}
    </>
  )
}
    

export default Buddy;