"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import style from "./NavBar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className="navbar-nav" href="#home">
            Navbar
          </Navbar.Brand>
          <Nav className="ms-auto">
            {isMobile ? (
              <button className={style.burgerButton} >
                <GiHamburgerMenu className={style.burger} />
              </button>
            ) : (
              <>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
                <Nav.Link href="#features">Resume</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
