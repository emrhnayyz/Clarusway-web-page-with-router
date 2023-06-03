import React from 'react'
import { Header, InputDiv } from './HomeStyle'


const About = () => {
  return (
    <div>
        <Header>
<div>
<h4>Subscribe To Our Newsletter</h4>
</div>

<div>
  <InputDiv placeholder='Enter Email...' type="text" />
  <button  className='btn btn-warning'>Search</button>
</div>



</Header>
<div style={{display:"flex", alignContent:"space-between",marginLeft:"5rem",marginTop:"5rem"}}>
    <div style={{width:"60%", height:"20rem",backgroundColor:"lightgray", marginRight:"4rem"}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae soluta ab sunt ratione. Consequuntur, voluptas quia reiciendis quidem rerum ab hic ducimus vel non excepturi accusamus in laudantium quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum alias asperiores sit expedita minima perferendis deserunt nostrum pariatur voluptatibus, non eum suscipit harum eveniet porro. Accusantium laboriosam dolorem optio corrupti?</p>
    </div>
    <div style={{padding:"1rem",color:"white",width:"30%", height:"20rem",backgroundColor:"darkblue"}}>
    <h1>What We Do</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro recusandae minus sequi ea soluta quaerat quidem, corporis, eius, illum unde animi quae consequatur iusto quisquam? Ipsa in at cum cumque!</p>

    </div>
</div>
<div style={{backgroundColor:"darkblue", color:"white",width:"60%",marginLeft:"5rem",marginTop:"2rem"}}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit doloribus accusantium voluptatum quo corporis consectetur unde! Voluptatum, nulla eum laboriosam consectetur vel, recusandae, quod suscipit fugit neque totam ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos vero non optio eaque magni quaerat? Voluptatum magnam nihil vero, impedit dolores aspernatur voluptatem maxime, minima eius culpa, sunt id.</p>
</div>
    </div>
  )
}

export default About