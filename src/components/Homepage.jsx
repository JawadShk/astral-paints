import React from "react";
import UseHomepageData from "../hooks/UseHomepageData";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import rainbowImage from "../assets/images/rainbow-new.svg";
import playIcon from "../assets/images/play-btn.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import serviceImg1 from "../assets/images/service1.png";
import serviceImg2 from "../assets/images/service2.png";
import serviceImg3 from "../assets/images/service3.png";

const Homepage = () => {
  const { data, loading, error } = UseHomepageData();

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {
    banners,
    homeAboutTitle,
    homeAboutSubtitle,
    homeAboutButton,
    homeAboutVideoImage,
    homeAboutVideoUrl,
    homeAboutDescription,
    homeCategoryTitle,
    homeCategorySubtitle,
    categories,
    homeServicesTitle,
    homeServicesSubtitle,
    homeColoursTitle,
    homeColoursSubtitle,
    homeJoinTitle,
    homeJoinSubtitle,
    homeJoinButton,
    homeColoursButton,
    homeJoinBackgroundImage,
    homeJoinDescription,
    blogTitle,
    blogSubtitle,
  } = data;

  return (
    <>
      <section className="banner">
        <Container fluid>
          <Row>
            <Col lg={12} className="p-0">
              <Carousel>
                {banners &&
                  banners.map((banner, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={banner.bannerImage.node.sourceUrl}
                        alt={banner.bannersTitle}
                      />
                      <Carousel.Caption>
                        <h3 className="bannersTitle">{banner.bannersTitle}</h3>
                        <p className="bannersDescription">
                          {banner.bannerDescription}
                        </p>
                        <Button
                          className="btn skyblue"
                          style={{ zIndex: "50", position: "relative" }}
                        >
                          {banner.bannerButton.title}
                        </Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
            <Col className="p-0">
              <img
                src={rainbowImage}
                alt=""
                className="img-fluid rainbowImg"
                style={{ width: "100%", zIndex: "10" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="about pt-5 pt-lg-0 pb-5"
        style={{ borderLeft: "10px solid #e70000" }}
      >
        <Container>
          <Row className="align-items-end mb-5">
            <Col lg={6} className="mb-lg-0 mb-5">
              <div className="mb-md-3">
                <p className="aboutSubTitle">{homeAboutSubtitle}</p>
                <h1 className="aboutTitle red mb-md-4 mb-3">
                  {homeAboutTitle}
                </h1>
              </div>
              {/* <p className="aboutPara">
                {homeAboutDescription}
              </p> */}
              <p
                className="aboutPara"
                dangerouslySetInnerHTML={{ __html: homeAboutDescription }}
              />

              {/* <p className="aboutPara">
                {homeAboutDescription}
              </p> */}
              <Button className="aboutButton btn red">
                {homeAboutButton.title}
              </Button>
            </Col>
            <Col lg={6}>
              <div className="img-wrapper">
                <img
                  src={homeAboutVideoImage.node.sourceUrl}
                  alt={homeAboutTitle}
                  className="img-fluid w-100"
                />
                <a
                  href={homeAboutVideoUrl}
                  target="_blank"
                  className="play-btn"
                >
                  <img src={playIcon} alt="playicon" className=" img-fluid" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="category pb-5"
        style={{
          borderLeft: "10px solid transparent",
          borderImage: "linear-gradient(180deg, #E70000  0%, #FF9119 100%) 1",
          height: "100%",
          borderImageSlice: 1,
        }}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <p className="aboutSubTitle">{homeCategorySubtitle}</p>
                <h1 className="aboutTitle orange mb-lg-4 mb-3">
                  {homeCategoryTitle}
                </h1>
              </div>
            </Col>

            <Col lg={6}>
              <Row className="g-3 mb-lg-0 mb-3">
                {categories && categories.length > 0 && (
                  <Col>
                    <div className="category-box">
                      <img
                        src={categories[0].image.node.sourceUrl}
                        alt={categories[0].title}
                        className="img-fluid w-100 category-image first"
                      />
                      <h3 className="categrory-title">{categories[0].title}</h3>
                      <Button className="btn gold">Read More</Button>
                    </div>
                  </Col>
                )}
              </Row>
            </Col>

            <Col lg={6}>
              <Row className="g-3">
                {categories &&
                  categories.slice(1).map((category, index) => (
                    <Col lg={6} xs={6} key={index}>
                      <div className="category-box">
                        <img
                          src={category.image.node.sourceUrl}
                          alt={category.title}
                          className="img-fluid w-100 category-image"
                        />
                        <h3 className="categrory-title">{category.title}</h3>
                        <Button className="btn gold d-none">
                          <FaLongArrowAltRight />
                        </Button>
                      </div>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="services pb-5"
        style={{ borderLeft: "10px solid #FF9119" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="mb-3">
                <p className="aboutSubTitle">{homeServicesSubtitle}</p>
                <h1 className="aboutTitle yellow mb-md-4 mb-3">
                  {homeServicesTitle}
                </h1>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-box">
                <img
                  src={serviceImg1}
                  alt="service"
                  className="img-fluid w-100"
                />
                <div className="service-content">
                  <h5>Wall Painting</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. </p>
                  <Button className="btn white">Read More</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-box">
                <img
                  src={serviceImg2}
                  alt="service"
                  className="img-fluid w-100"
                />
                <div className="service-content">
                  <h5>Water Solution</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. </p>
                  <Button className="btn white">Read More</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-box">
                <img
                  src={serviceImg3}
                  alt="service"
                  className="img-fluid w-100"
                />
                <div className="service-content">
                  <h5>Painting</h5>
                  <p>Lorem ipsum dolor sit amet consectetur. </p>
                  <Button className="btn white">Read More</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="colours pb-5"
        style={{
          borderLeft: "10px solid transparent",
          borderImage: "linear-gradient(180.02deg, #FF9119 0%, #00AE44 100%) 1",
          height: "100%",
          borderImageSlice: 1,
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} xs={12}>
              <div className="mb-md-3">
                <p className="aboutSubTitle">{homeColoursSubtitle}</p>
                <h1 className="aboutTitle green mb-md-4 mb-3">
                  {homeColoursTitle}
                </h1>
              </div>
            </Col>
            <Col md={6} xs={12} className="text-md-end mb-4">
              <Button className="btn green">{homeColoursButton.title}</Button>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-lg-0 mb-4">
              <div
                className="popular-colours"
                style={{
                  background: "#FAE0B2",
                  border: "2px solid white",
                  outline: "4px solid #FAE0B2",
                  width: "100%",
                  height: "158px",
                }}
              ></div>
              <div className="colour-info">
                <p className="colour-name">Colour Name</p>
                <small className="colour-code">Colour Code</small>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-lg-0 mb-4">
              <div
                className="popular-colours"
                style={{
                  background: "#FBC9C3",
                  border: "2px solid white",
                  outline: "4px solid #FBC9C3",
                  width: "100%",
                  height: "158px",
                }}
              ></div>
              <div className="colour-info">
                <p className="colour-name">Colour Name</p>
                <small className="colour-code">Colour Code</small>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-lg-0 mb-4">
              <div
                className="popular-colours"
                style={{
                  background: "#00C1DE",
                  border: "2px solid white",
                  outline: "4px solid #00C1DE",
                  width: "100%",
                  height: "158px",
                }}
              ></div>
              <div className="colour-info">
                <p className="colour-name">Colour Name</p>
                <small className="colour-code">Colour Code</small>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-lg-0 mb-4">
              <div
                className="popular-colours"
                style={{
                  background: "#0060AF",
                  border: "2px solid white",
                  outline: "4px solid #0060AF",
                  width: "100%",
                  height: "158px",
                }}
              ></div>
              <div className="colour-info">
                <p className="colour-name">Colour Name</p>
                <small className="colour-code">Colour Code</small>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-lg-0 mb-4">
              <div
                className="popular-colours"
                style={{
                  background: "#800404",
                  border: "2px solid white",
                  outline: "4px solid #800404",
                  width: "100%",
                  height: "158px",
                }}
              ></div>
              <div className="colour-info">
                <p className="colour-name">Colour Name</p>
                <small className="colour-code">Colour Code</small>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-lg-0 mb-4">
              <div
                className="popular-colours"
                style={{
                  background: "#ECA628",
                  border: "2px solid white",
                  outline: "4px solid #ECA628",
                  width: "100%",
                  height: "158px",
                }}
              ></div>
              <div className="colour-info">
                <p className="colour-name">Colour Name</p>
                <small className="colour-code">Colour Code</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="join-us py-5 text-white text-center"
        style={{
          backgroundImage: `url(${homeJoinBackgroundImage.node.sourceUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderLeft: "10px solid transparent",
          borderImage: "linear-gradient(180.02deg, #00AE44 0%, #00C1DE 100%) 1",
          height: "100%",
          borderImageSlice: 1,
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <p className="aboutSubTitle text-center">{homeJoinSubtitle}</p>
              <p className="aboutTitle mb-md-4 mb-3">{homeJoinTitle}</p>
              <p dangerouslySetInnerHTML={{ __html: homeJoinDescription }} />
              {/* <p>
                {homeJoinDescription}
              </p> */}
              <Button className="btn white">{homeJoinButton.title}</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="blogs py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="aboutSubTitle">{blogSubtitle}</p>
              <p className="aboutTitle blue mb-4">{blogTitle}</p>
            </Col>

            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={4}>
                  <Row>
                    <Col lg={12}>
                      <div className="blog-box">
                        <img
                          src={categories[1]?.image.node.sourceUrl}
                          alt={categories[1]?.title}
                          className="img-fluid w-100"
                        />
                        <p className="blog-date">10 Jan 2024</p>
                        <p className="blog-title">How to choose the perfect 
                        wallcolour for your office</p>
                        <Button className="btn gold">
                          Read More
                        </Button>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="blog-box">
                        <img
                          src={categories[2]?.image.node.sourceUrl}
                          alt={categories[2]?.title}
                          className="img-fluid w-100"
                        />
                        <p className="blog-date">10 Jan 2024</p>
                        <p className="blog-title">How to choose the perfect 
                        wallcolour for your office</p>
                        <Button className="btn gold">
                          Read More
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4}>
                  <Row>
                    <Col lg={12}>
                      <div className="blog-box">
                        <img
                          src={categories[0]?.image.node.sourceUrl}
                          alt={categories[0]?.title}
                          className="img-fluid w-100"
                        />
                        <p className="blog-date">20 Jan 2024</p>
                        <p className="blog-title">10 stylish cream colour 
                        combination for your home</p>
                        <Button className="btn gold" href={categories[0]?.link}>
                          Read More
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4}>
                  <Row>
                    <Col lg={12}>
                      <div className="blog-box">
                        <img
                          src={categories[3]?.image.node.sourceUrl}
                          alt={categories[3]?.title}
                          className="img-fluid w-100"
                        />
                        <p className="blog-date">10 Jan 2024</p>
                        <p className="blog-title">How to choose the perfect 
                        wallcolour for your office</p>
                        <Button className="btn gold" href={categories[3]?.link}>
                          Read More
                        </Button>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="blog-box">
                        <img
                          src={categories[4]?.image.node.sourceUrl}
                          alt={categories[4]?.title}
                          className="img-fluid w-100"
                        />
                        <p className="blog-date">10 Jan 2024</p>
                        <p className="blog-title">How to choose the perfect 
                        wallcolour for your office</p>
                        <Button className="btn gold" href={categories[4]?.link}>
                          Read More
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section
        className="blogs py-5"
        style={{ borderLeft: "10px solid #00C1DE" }}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <p className="aboutSubTitle">{blogSubtitle}</p>
              <p className="aboutTitle blue mb-4">{blogTitle}</p>
            </Col>

            <Col lg={12}>
              <Row>
                {categories &&
                  categories.slice(0, -1).map((category, index) => (
                    <Col lg={3} xs={6} key={index} className="mb-4">
                      <Card>
                        <Card.Img
                          variant="top"
                          className="img-fluid blog-img"
                          src={category.image.node.sourceUrl}
                        />
                        <Card.Body className="pb-md-3 p-md-3 p-2">
                          <small>10 Jan 2024</small>
                          <Card.Title>{category.title}</Card.Title>
                          <Button className="blog-btn btn white">
                            Read More
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Homepage;
