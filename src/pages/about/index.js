import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  tools,
} from "../../content_option";
import myPic from "../../assets/images/MyPic.png";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-2 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-2">About me</h1>
            <hr className="t_border my-1 ml-0 text-left" />
          </Col>
        </Row>
        <Row
          className="sec_sp d-flex justify-content-between flex-wrap"
          style={{ width: "100%" }}
        >
          <Col lg="7">
            <>
              <h3 className="color_sec">{dataabout.title}</h3>
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </>
            <>
              <h3 className="color_sec mt-3 mb-0">Work Timline</h3>
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.company}</td>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
            <>
              <h3 className="color_sec mt-3 mb-0">Skills</h3>
              {skills.map((data, i) => {
                return (
                  <div key={i} className="d-flex gap-4 justify-content-between">
                    <div className="w-50">
                      <h3 className="progress-title">{data.name}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${data.value}%`,
                          }}
                        >
                          <div className="progress-value">{data.value}%</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-50">
                      <h3 className="progress-title">{data.name2}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${data.value2}%`,
                          }}
                        >
                          <div className="progress-value">{data.value2}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
            <>
              <h3 className="color_sec mt-3 mb-0">Tools</h3>
              <ul className="">
                {tools.map((data, i) => {
                  return (
                    <div className="d-flex gap-4 justify-content-between tools">
                      <li key={i} className="progress-title mx-0 px-0 w-25">
                        {data.name}
                      </li>
                      {data.name2 && (
                        <li key={i} className="progress-title mx-0 px-0 w-25">
                          {data.name2}
                        </li>
                      )}
                    </div>
                  );
                })}
              </ul>
            </>
          </Col>
          <Col lg="4">
            <div className="">
              <img
                src={myPic}
                alt=""
                className="w-100 h-75 border rounded-4 mt-5"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
