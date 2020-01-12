import React from "react";
import { Col, Container, Row } from "reactstrap";
import MiddleContainerCarousel from "./Carousel/MiddleContainerCarousel";

function MiddleContainer() {
  const style = {
    margin: "1rem 0rem",
    padding: "0rem 0rem"
  };
  return (
    <React.Fragment>
      <Container className="can">
        <Row className="ram justify-contentcenter">
          <Col lg={8} md={6} sm={12} xs={12} style={style}>
            <div className="carousal info">
              <h1>Coming Up Events and Games.</h1>
              <h2>
                Register for Gym classes, intramurals, nutriionist appointment
                and many more.
              </h2>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12} style={style}>
            <div className="carousal">
              <MiddleContainerCarousel></MiddleContainerCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default MiddleContainer;
