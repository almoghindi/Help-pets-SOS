import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
      style={{ marginTop: "10rem" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/almogi.iris"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/Almoghindi" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="google.com" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com/almoghindi/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/almog-hindi/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://github.com/almoghindi" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Help Pets S.O.S.
              </h6>
              <p>
                Deep in 2022, after many cases of animal abuse, 2 Young
                developers made a desicion, we need to fight the situation, and
                we develop a platform to report every animal abuse case that you
                see and we try to help !
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Animals</h6>
              <p>
                <a href="#!" className="text-reset">
                  Dogs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cats
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Rabits
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Fish
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="/store" className="text-reset">
                  Store
                </a>
              </p>
              <p>
                <a href="/helpets" className="text-reset">
                  Report
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Yavnieli 3, Hadera, IL
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                almoghinde@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 952 54 717 4350
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 952 54 717 4350
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">
          Almoghindi
        </a>
      </div>
    </MDBFooter>
  );
}
