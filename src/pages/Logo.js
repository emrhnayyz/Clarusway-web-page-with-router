import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import htmlphoto from "../assets/images/logo_html.png"
import cssphoto from "../assets/images/logo_css.png"
import brushphoto from "../assets/images/logo_brush.png"
import { Cards } from '../components/CardStyle';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

const navigate = useNavigate()

  return (
    <div>
         <Cards onClick={()=>navigate("/logo")} style={{ width: '60%', textAlign:"center", margin:"auto", marginTop:"5rem" }}>
    <Card.Img style={{height:"8rem", objectFit:"scale-down"}} variant="top" src={brushphoto} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit, porro vero, reiciendis non in asperiores voluptatibus quia repudiandae quaerat, architecto ullam! At veniam tempore provident, maxime blanditiis illum ab.
        Odit totam aut, ipsa natus illum praesentium sunt ipsam quae, sed, saepe odio molestiae incidunt quia dolorem magni esse optio quo fugit minus maiores laudantium asperiores officiis accusantium? Quia, eos!
        Nobis iure eos soluta velit unde nihil, aut fugit maiores consequatur sit autem tempora. Debitis, qui, delectus deleniti sed corrupti ex maxime architecto, fugit tenetur neque praesentium! Dolore, magnam eos.
        Tenetur laborum laudantium iure labore enim, soluta, nisi fuga quas impedit ab at atque repudiandae sit quibusdam! Alias saepe, voluptatem ipsam incidunt earum quas, consequatur maxime iste aspernatur beatae sapiente?
        Accusamus, ratione rem! Ad modi iste excepturi totam suscipit, omnis at dignissimos saepe dolore quam nesciunt labore pariatur voluptatibus quod inventore veritatis? Esse ex nemo incidunt reprehenderit ad aspernatur ea.
      </Card.Text>
      
    </Card.Body>
  </Cards> 
    </div>
  )
}

export default Logo