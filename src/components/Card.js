import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import htmlphoto from "../assets/images/logo_html.png"
import cssphoto from "../assets/images/logo_css.png"
import brushphoto from "../assets/images/logo_brush.png"
import { Cards } from './CardStyle';
import { useNavigate } from 'react-router-dom';

const CardPage = () => {

    const navigate = useNavigate();


  return (

    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",marginTop:"3rem", marginLeft:"10rem"}}>
    <Cards onClick={()=>navigate("/html")} style={{ width: '18rem', textAlign:"center" }}>
    <Card.Img style={{height:"8rem", objectFit:"scale-down"}} variant="top" src={htmlphoto} />
    <Card.Body>
      <Card.Title>HTML5 Markup</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
  </Cards>
  <Cards onClick={()=>navigate("/css")} style={{ width: '18rem',textAlign:"center" }}>
    <Card.Img style={{height:"8rem", objectFit:"scale-down"}} variant="top" src={cssphoto} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
  </Cards>
  <Cards onClick={()=>navigate("/logo")} style={{ width: '18rem',textAlign:"center" }}>
    <Card.Img style={{height:"8rem", objectFit:"scale-down"}} variant="top" src={brushphoto} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
  </Cards>
  </div>
  )
}

export default CardPage