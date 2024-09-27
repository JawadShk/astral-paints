import { Container, Col, Row } from "react-bootstrap";
import companyImg1 from "../assets/images/companyImg1.png";
import companyImg2 from "../assets/images/companyImg2.png";
import companyImg3 from "../assets/images/companyImg3.png";
import companyImg4 from "../assets/images/companyImg4.png";
import companyImg5 from "../assets/images/companyImg5.png";
import logo from "../assets/images/Astral-Paints-Logo.svg";
import { PiMapPin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="footer text-white py-md-5 py-4">
        <Container>
          <Row
            className="justify-content-center text-center pb-4"
            style={{ borderBottom: "0.8px solid #EEDBB0" }}
          >
            <Col lg={12}>
              <h2 className="aboutTitle mb-5">Group Company</h2>
            </Col>
            <Col lg={2} md={3} xs={6}>
              <img src={companyImg1} alt="companyImg" className="img-fluid" />
            </Col>
            <Col lg={2} md={3} xs={6}>
              <img src={companyImg2} alt="companyImg" className="img-fluid" />
            </Col>
            <Col lg={2} md={3} xs={6}>
              <img src={companyImg3} alt="companyImg" className="img-fluid" />
            </Col>
            <Col lg={2} md={3} xs={6}>
              <img src={companyImg4} alt="companyImg" className="img-fluid" />
            </Col>
            <Col lg={2} md={3} xs={6}>
              <img src={companyImg5} alt="companyImg" className="img-fluid" />
            </Col>
          </Row>

          <Row className="pt-5">
            <Col lg={5}>
              <img src={logo} alt="logo" className="img-fluid mb-lg-0 mb-3" />
            </Col>
            <Col lg={7}>
              <Row>
                <Col md={4}>
                  <p className="label">sign up to our newsletter</p>
                  <p className="footer-text">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </Col>
                <Col md={8}>
                  <div class="search">
                    <i class="fa fa-search"></i>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email Address"
                    />
                    <button class="btn btn-primary">Enquire Now</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={5} xs={12}>
              <p className="label">Reach us</p>
              <ul>
                <li>
                  <PiMapPin />
                  #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,{" "}
                  <br />
                  Bangalore - 560 058
                </li>
                <li>
                  <a href="tel: +91 – 80 – 42552555">
                    <IoCallOutline />
                    +91 – 80 – 42552555
                  </a>
                </li>
                <li>
                  <a href="mailto: info@gem-paints.com">
                    <CiMail />
                    info@gem-paints.com
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={7} xs={12}>
              <Row>
                <Col lg={3} md={3} xs={6}>
                  <p className="label">About</p>
                  <ul>
                    <li>
                      <a href="">About astrals</a>
                    </li>
                    <li>
                      <a href="">paint journey</a>
                    </li>
                    <li>
                      <a href="">Group Companies</a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <p className="label">Category</p>
                  <ul>
                    <li>
                      <a href="">interior paints</a>
                    </li>
                    <li>
                      <a href="">exterior paints</a>
                    </li>
                    <li>
                      <a href="">painting tools</a>
                    </li>
                    <li>
                      <a href="">water proofing</a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <p className="label">Services</p>
                  <ul>
                    <li>
                      <a href="">wall painting</a>
                    </li>
                    <li>
                      <a href="">water Solution</a>
                    </li>
                    <li>
                      <a href="">painting</a>
                    </li>
                    <li>
                      <a href="">colour shades</a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <ul>
                    <li>
                      <a href="" className="label">
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a href="" className="label">
                        Become a dealer
                      </a>
                    </li>
                    <li>
                      <a href="" className="label">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="" className="label">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul className="social-icons mt-3">
                    <li>
                      <a href="">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaXTwitter />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="policy-sec text-white"
        style={{ backgroundColor: "#0060AF" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={4} xs={6} className="text-md-start">
              <a href="">Terms & Conditions</a>
            </Col>
            <Col lg={4} xs={6} className="text-md-center">
              <a href="">ALL RIGHTS RESERVED</a>
            </Col>
            <Col lg={4} xs={6} className="text-md-end">
              <a href="">Privacy Policy</a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
