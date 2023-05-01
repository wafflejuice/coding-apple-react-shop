import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js';
import { useState } from 'react';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail.js';
import axios from 'axios';
import Cart from './pages/Cart.js';

function App() {
  let [shoesList, setShoesList] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <Container fluid>
              <Row>
                {
                  shoesList.map((shoes, i) => {
                    return < Card shoes={shoes} key={i} />
                  })
                }
                <div>
                  <p>recent watched: {JSON.parse(localStorage.getItem('watched'))}</p>
                </div>
              </Row>
            </Container>
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((response) => { setShoesList(shoesList.concat(response.data)) })
                .catch(() => { console.log('fail') })
            }}>
              more
            </button>
          </>
        } />
        <Route path='/detail/:id' element={<Detail shoesList={shoesList} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} >
          <Route path='member' element={<p>member info</p>} />
          <Route path='location' element={<p>location info</p>} />
        </Route>
        <Route path='/event' element={<EventPage />}>
          <Route path='one' element={<p>First delivery</p>}></Route>
          <Route path='two' element={<p>Birthday coupon</p>}></Route>
        </Route>
        <Route path='*' element={<p>nope</p>} />
      </Routes>

    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>Today's event</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>company info</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <Col>
      <img src={`${process.env.PUBLIC_URL}/img/shoes${props.shoes.id}.jpg`} width='80%'></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  );
}

export default App;
