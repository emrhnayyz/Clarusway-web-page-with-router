import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import htmlphoto from "../assets/images/logo_html.png"
import cssphoto from "../assets/images/logo_css.png"
import brushphoto from "../assets/images/logo_brush.png"
import { Cards } from '../components/CardStyle';
import { useNavigate } from 'react-router-dom';

const Css = () => {

  return (
    <div>
          
  <Cards style={{ width: '60%', textAlign:"center", margin:"auto", marginTop:"5rem" }}>
    <Card.Img style={{height:"8rem", objectFit:"scale-down"}} variant="top" src={cssphoto} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus minima itaque, enim architecto, dolorem qui reiciendis ex id modi maiores tempore voluptate aut natus. Ipsam aut quos saepe doloremque ratione.
        Repudiandae quidem pariatur illo odio, exercitationem, facere soluta quae recusandae asperiores consequuntur laborum modi nisi eveniet culpa, dolorem voluptatum quisquam mollitia itaque aliquid? Hic sit adipisci vero, excepturi dolores perspiciatis?
        Quis repellendus eligendi culpa omnis sapiente ullam quibusdam, nihil obcaecati harum rem error accusamus beatae minus consequuntur laborum facilis numquam recusandae maiores labore fugiat voluptate similique, quisquam eveniet cumque? Dolore?
        Officiis atque sed quas. Molestias quibusdam optio totam magni sit atque, incidunt, dolorem officia libero animi non unde rerum nobis. Nihil odio expedita facilis quidem fugiat perspiciatis fuga deserunt maiores.
        Tempora cupiditate repudiandae necessitatibus assumenda vero dolor cumque doloribus perspiciatis, perferendis iure rerum unde accusamus minus quo veniam rem nostrum aperiam laborum aut excepturi ducimus odio. Aliquam distinctio iusto ad.
      </Card.Text>
      
    </Card.Body>
  </Cards>
    </div>
  )
}

export default Css