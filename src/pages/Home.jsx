import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Header, InputDiv, Nav} from "./HomeStyle"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from '../components/Card';
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