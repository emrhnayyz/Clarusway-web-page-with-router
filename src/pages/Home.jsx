import React from 'react'


import Form from 'react-bootstrap/Form';
import {Header, InputDiv, Nav} from "./HomeStyle"

import CardPage from '../components/Card';


const Home = () => {
  return (
    <div>
<Header>
<div>
<h4>Subscribe To Our Newsletter</h4>
</div>
<Form>
  <InputDiv placeholder='Enter Email...' type="text" />
  <button  className='btn btn-warning'>Search</button>
</Form>

</Header>
<CardPage/>

    </div>
  )
}

export default Home