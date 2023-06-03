import React from 'react'
import Card from 'react-bootstrap/Card';
import htmlphoto from "../assets/images/logo_html.png"

import { Cards } from '../components/CardStyle';

const Html = () => {
  return (
    <div>
            <Cards style={{ width: '60%', textAlign:"center", margin:"auto", marginTop:"5rem" }}>
    <Card.Img style={{height:"8rem", objectFit:"scale-down"}} variant="top" src={htmlphoto} />
    <Card.Body>
      <Card.Title>HTML5 Markup</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus dicta facilis inventore veritatis suscipit facere ex unde non nam, consequatur sint consequuntur perspiciatis quia, repudiandae vero commodi ipsam pariatur?
        Dolorum facere ad tenetur nobis. Illo delectus consequuntur consequatur quasi distinctio provident eos ratione, molestias commodi temporibus sunt quis blanditiis ad sit. Eum similique pariatur harum, reiciendis fugit provident ullam.
        Nam nulla, obcaecati veritatis quia quas, nemo mollitia ea, facere impedit perspiciatis in molestias error suscipit temporibus neque dolorum soluta dignissimos optio adipisci necessitatibus esse magnam. Non laboriosam ab alias.
        Nam facere tenetur voluptate dolores eveniet ut voluptates inventore, quod soluta quia earum distinctio! Cupiditate sequi officia id ex deserunt quisquam commodi eum, expedita beatae a veniam iste hic. Cum!
        Architecto error quos quasi. Magni exercitationem quod quibusdam nam cumque, quisquam sequi. Atque, repellendus. Beatae deserunt, consectetur animi exercitationem dolore corrupti quo, quos numquam repellat expedita voluptatem alias fugit impedit!
      </Card.Text>
      
    </Card.Body>
  </Cards>
    </div>
  )
}

export default Html