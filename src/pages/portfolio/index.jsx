import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          {/* <title> Portfolio | {meta.title} </title> */}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={`${data.name}-${i}`} className="po_item">
              <img
                src={
                  data.img ||
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                }
                alt={data.name}
              />
              <div className="content">
                <p>{data.description}</p>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <a href={data.link} target="_blank" rel="noreferrer">
                    View project
                  </a>
                  <a href={data.sourceCode} target="_blank" rel="noreferrer">
                    Source code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
