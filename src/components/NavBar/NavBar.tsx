"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import style from "./NavBar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser, BiFile } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Dragging from "../Animation/Dragging";

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
            Logo
          </Navbar.Brand>
          <Nav className="ms-auto">
            {isMobile ? (
              <button className={style.burgerButton}>
                <GiHamburgerMenu className={style.burger} />
              </button>
            ) : (
              <>
                <Nav.Link href="#home">
                  <BiSolidUser />
                  Home
                </Nav.Link>
                <Nav.Link href="#features">
                  <TiHome />
                  About
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <AiOutlineFundProjectionScreen />
                  Projects
                </Nav.Link>
                <Nav.Link href="#features">
                  <BiFile />
                  Resume
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

/* BiSolidUser
TiHome
AiOutlineFundProjectionScreen
BiFile
*/
