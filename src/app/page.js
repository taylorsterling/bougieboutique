'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '@/styles/custom.scss'
import Image from 'next/image'
import Brand from '@/components/Brand'
import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weight: ["400"] })
import { Domine } from 'next/font/google'
const domine = Domine({ subsets: ['latin'], weight: ["600"] })
import Link from 'next/link'



export default function Home() {
  return (
    <main className={`${raleway.className} text-white`}>
      <div className="navWrap">
        <Navbar variant="dark" expand="lg" className="pt-3 pb-0 mb-0">
          <Container>

            <Navbar.Brand className={`${domine.className}`} href="/"><Brand></Brand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${raleway.className} ms-auto text-start`}>
                <Nav.Link className="navLink" href="#services">Home</Nav.Link>
                <Nav.Link className="navLink" href="#about">About</Nav.Link>
                <NavDropdown className="dropdownLink" title="Shop" id="collasible-nav-dropdown">
                  <NavDropdown.Item className="dropdownLink" as={Link} href="/dresses">Dresses</NavDropdown.Item>
                  <NavDropdown.Item className="dropdownLink" as={Link} href="/tops">Tops</NavDropdown.Item>
                  <NavDropdown.Item className="dropdownLink" as={Link} href="/bottoms">Bottoms</NavDropdown.Item>
                  <NavDropdown.Item className="dropdownLink" as={Link} href="/outfits">Outfits</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <img className=" top-bubbles bubbles mx-auto img-fluid text-center" src="/bubbles.png" />
      </div>

      <div className="container-fluid">
        <div className="row welcome">
          <h1 className="text-white text-center py-4">Welcome to the <Brand></Brand> !</h1>
          <div className="col-md-6 py-5">
            <img className="mx-auto img-fluid text-center px-5 py-3" src="/nana.png" />
          </div>
          <div className="col-md-6 py-3">
            <h2 className="text-center my-auto py-3 fs-2"><em>Just a Nana and some thread</em></h2>
            <p className="fs-4 py-3">Looking for high quality clothes for the adorable girls in your life? Look no further! Here we make hand-sewn home-made dresses, outfits, and more with practicality, comfort, and style in mind.<br></br><br></br>
              We regularly change up our inventory based on stock, season, and item popularity, so if you don't see something right away you're in love with, please check back soon! <br></br><br></br>
              Keep up with the latest updates by signing up for our Newsletter <a href="#newsletter">here!</a></p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <h2 className="text-center my-auto py-5 fs-1">Featured Items</h2>
          <div className="col-md-3">
            <div className="card">
              <img className="img-fluid text-center mx-auto image" src="/featured1.png" />
              <div className="card-body">
                <h5 className="card-title">Lazy Day Getup</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn bg-secondary">Take A Look</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="img-fluid text-center mx-auto image"  src="/featured2.png" />
              <div className="card-body">
                <h5 className="card-title">Fame- Coat</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn bg-white">Take A Look</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="img-fluid text-center mx-auto image"  src="/featured3.png" />
              <div className="card-body">
                <h5 className="card-title">Pretty In Pink Dress</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn bg-secondary">Take A Look</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="img-fluid text-center mx-auto image"  src="/featured4.png" />
              <div className="card-body">
                <h5 className="card-title">Flower Power Overall Dress</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn bg-white">Take A Look</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">

        </div>
      </div>

      <div className='bubbles-down'><img className="mx-auto img-fluid text-center" src="/bubbles.png" /></div>

      <div className="bg-primary text-center py-3">©2023 CybearWeb, LLC
      </div>




    </main>

  )
}
