import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  tools,
} from "../../content_option";
import SkillBar from "../../components/SkillBar";

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
        <Row className="sec_sp d-flex justify-content-between flex-wrap">
          <Col lg="7">
            <div>
              <h3 className="color_sec">{dataabout.title}</h3>
              <p>{dataabout.aboutme}</p>
            </div>
            <div className="py-3">
              <h3 className="color_sec mt-3 mb-0">Work Timeline</h3>
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => (
                    <tr key={`${data.company}-${i}`}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.company}</td>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="color_sec mt-3 mb-0">Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, i) => (
                  <div
                    key={`skill-${i}`}
                    className="d-flex gap-4 justify-content-between"
                  >
                    <div className="w-50">
                      <SkillBar name={skill.name} value={skill.value} />
                    </div>
                    <div className="w-50">
                      <SkillBar name={skill.name2} value={skill.value2} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
                alt="Developer workspace"
                className="w-100 h-75 border rounded-4 mt-5"
              />
            </div>
            <div>
              <h3 className="color_sec mt-5">Tools</h3>
              <div className="tools-grid">
                {tools.map((tool, i) => (
                  <div key={`tool-${i}`} className="tools">
                    <div className="d-flex">
                      <div className="py-2 w-50">{tool.name}</div>
                      {tool.name2 && (
                        <div className="py-2 w-50">{tool.name2}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
