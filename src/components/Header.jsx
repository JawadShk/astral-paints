// import { Button, Col, Row } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "../assets/images/Astral-Paints-Logo.svg";

// const Header = () => {
//   return (
//     <>
//       <section className="header">
//         <Container>
//           <Row>
//             <Col className="p-0">
//               <Navbar
//                 className="header-wrapper"
//                 collapseOnSelect
//                 expand=""
//                 data-bs-theme="dark"
//               >
//                 <Container>
//                   <Navbar.Brand href="/">
//                     <img src={logo} alt="logo" />
//                   </Navbar.Brand>
//                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                   <Navbar.Collapse id="responsive-navbar-nav" className="collapse justify-content-end">
//                     <Nav className="ml-auto">
//                       <Nav.Link href="#home">About</Nav.Link>
//                       <Nav.Link href="#category">Category</Nav.Link>
//                       <Nav.Link href="#services">Services</Nav.Link>
//                       <Nav.Link href="#colours">Colours</Nav.Link>
//                       <Nav.Link href="#downloads">Downloads</Nav.Link>
//                       <Nav.Link href="#become-a-dealer">
//                         Become a dealer
//                       </Nav.Link>
//                       <Nav.Link href="#blogs">Blogs</Nav.Link>
//                       <Nav.Link href="#contact">Contact</Nav.Link>
//                   <Button className="btn blue">Enquire Now</Button>
//                     </Nav>
//                   </Navbar.Collapse>
//                 </Container>
//               </Navbar>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };


// export default Header;


import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/images/Astral-Paints-Logo.svg"; // Ensure this path is correct

const Header = () => {
  return (
    <Navbar collapseOnSelect className="header" expand="xl">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ width: '150px' }} /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="text-white responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto py-3">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#category">Category</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#colours">Colours</Nav.Link>
            <Nav.Link href="#downloads">Downloads</Nav.Link>
            <Nav.Link href="#become-a-dealer">Become a dealer</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button className="btn blue d-inline-block">Enquire Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

