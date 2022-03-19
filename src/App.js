import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
import student from './image/student.png'
import content from './image/content.jpg'
import content1 from './image/content1.jpg'
import content2 from './image/content2.jpg'
import defaultuser from './image/defaultuser.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faIndianRupeeSign, faRupee, faRupeeSign, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel'
import { Navbar, NavbarBrand, navbartoggle, navbarcollapse, NavLink, NavDropdown, Form, Button, Container, Nav, FormControl } from 'react-bootstrap';
import style from './Style.css';


function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://studentdesk.in/api/v1/book-details/12196").then((book) => {

      book.json().then((resp) => {
        // console.warn("book", resp)
        setdata(resp)
      })
    })
  }, [])
  console.warn(data)

  return (
    <div className="App">
      <div className='header '>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={student} alt="student image" height={40} width={170} />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            {/* <Navbar.Collapse id="navbarScroll"> */}
            {/* <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll> 

              </Nav> */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search by author, book name"
                className="me-2"
                aria-label="Search" />
              <a class="search-submit-button" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <Button className='button' >Post Book</Button>
              <Button className='button'>Login/SignUp</Button>

            </Form>
            {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
      </div>


      <Container>
        <h3>Related search result:</h3>
        <div className='main'>
          <div className='listing-details'>
            <div className='listing-box'>
              <div className='img-box'>
                <img className='img-responsive' src={content}>

                </img>
              </div>
              <div className='detail-box'>
                <h3>An atlas of love</h3>
                <p>Author: Anuja Chauhan</p>
                <p>City: Navsari</p>
                <p >Posted by:
                  {' '}
                  <img className='user' src={defaultuser} />
                  {' '}
                  <span className='book'> Jill Thakkar</span>

                </p>
                <div className='boxbutton'>
                  <button>Buy book</button>
                  <button>Exchange book</button>

                </div>
              </div>



              <div className='postedby'>
                <h4>Price :   {' '}
                  <FontAwesomeIcon icon={faIndianRupeeSign} />{' '}
                  79 |
                  <strike className='mrp-color'>{' '}
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    195
                  </strike>
                </h4>
                <p class="pull-right ng-binding">Posted on :  1, Dec</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* book 2 */}
      <Container>
        <div className='main'>
          <div className='listing-details'>
            <div className='listing-box'>
              <div className='img-box'>
                <img className='img-responsive' src={content1}>

                </img>
              </div>
              <div className='detail-box'>
                <h3>The rozabal line</h3>
                <p>Author: Ashwin sanghi</p>
                <p>City: Bengluru - Bangalore</p>
                <p >Posted by:
                  {' '}
                  <img className='user' src={defaultuser} />
                  {' '}
                  Sagar sagars

                </p>
                <div className='boxbutton'>
                  <button>Buy book</button>
                  <button>Exchange book</button>

                </div>
              </div>
              <div className='postedby'>
                <h4>Price :   {' '}
                  <FontAwesomeIcon icon={faIndianRupeeSign} />{' '}
                  225 |
                  <strike className='mrp-color'>{' '}
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    450
                  </strike>
                </h4>
                <p class="pull-right ng-binding">Posted on :  17, Nov</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* book3 */}
      <Container>
        <div className='main'>
          <div className='listing-details'>
            <div className='listing-box'>
              <div className='img-box'>
                <img className='img-responsive' src={content2}>

                </img>
              </div>
              <div className='detail-box'>
                <h3>A girl to remember</h3>
                <p>Author: Ajay K Pandey,</p>
                <p>City: Panaji</p>
                <p >Posted by:
                  {' '}
                  <img className='user' src={defaultuser} />
                  {' '}
                  Ayesha

                </p>
                <div className='boxbutton'>
                  <button>Buy book</button>
                  <button>Exchange book</button>

                </div>
              </div>
              <div className='postedby'>
                <h4>Price :   {' '}
                  <FontAwesomeIcon icon={faIndianRupeeSign} />{' '}
                  105 |
                  <strike className='mrp-color'>{' '}
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    195
                  </strike>
                </h4>
                <p class="pull-right ng-binding">Posted on :  25, oct</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
