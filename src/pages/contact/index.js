import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
// import mailGif from "../../assets/images/Mail.jpg";
import mailGiff from "../../assets/images/Mail_sent.gif";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });
    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: `Hi ${formData.name}, thanks for your message! I will get back to you soon!`,
            variant: "success",
            show: true,
          });

          // setSuccessMsg(
          //   "Thanks for your message! I will get back to you soon!"
          // );
          setTimeout(() => {
            setFormdata({
              email: "",
              name: "",
              message: "",
              loading: false,
              show: false,
              alertmessage: "",
              variant: "",
            });
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          // setErrorMsg(`Sorry ${formData.name}, failed to send message`);

          document.getElementsByClassName("co_alert")[0].scrollIntoView();

          setTimeout(() => {
            setFormdata({
              email: "",
              name: "",
              message: "",
              loading: false,
              show: false,
              alertmessage: "",
              variant: "",
            });
          }, 1000);
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="">
          <Col lg="10">
            <h1 className="display-5 my-0">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.alertmessage ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
            {/* {formData.alertmessage === "" && (
              <>
                <div className="text-success">{errorMsg}</div>
                <div className="text-danger">{successMsg}</div>
              </>
            )} */}
          </Col>

          <Col lg="" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="" className="">
                  <h3 className="color_sec pb-1">Get in touch</h3>
                  <p>{contactConfig.description}</p>
                  <address>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                      {contactConfig.YOUR_EMAIL}
                    </a>
                    <br />
                    {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                      <p>
                        <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                      </p>
                    ) : (
                      ""
                    )}
                  </address>
                </Col>
              </Row>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col
                  lg="12"
                  className="form-group d-flex justify-content-center mb-2"
                >
                  <button className="btn ac_btn w-100" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col lg="6" className="">
            <img
              src={mailGiff}
              alt=""
              className="w-100 rounded-4"
              style={{ height: "98%" }}
            />
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
