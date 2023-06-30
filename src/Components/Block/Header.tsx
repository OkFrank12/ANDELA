import React from "react";
import Button from "../Static/Button";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import img from "../../Assets/AND-Logo-Lockup-White-RGB-1024x269.png";

const Header = () => {
  const [display, setDisplay] = React.useState<boolean>(false);

  const onDisplay = () => {
    setDisplay(!display);
  };
  const [scroll, setScroll] = React.useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <div>
      {scroll ? (
        <Container bg="">
          <Main clr="">
            <Link to="/">
              <Logo src="https://andela.com/wp-content/uploads/2022/03/AND-Logo-Lockup-Green-Black-RGB.svg" />
            </Link>
            <NavsHolder>
              <Navs to="/experts" clr="black">
                For Technology Experts
              </Navs>
              <Navs to="" clr="black">
                Business
              </Navs>
              <Navs to="/enterprise" clr="black">
                Enterprise
              </Navs>
            </NavsHolder>
            <CallToAction>
              <Navs to="" clr="black">
                Apply For Jobs
              </Navs>
              <Button
                bg="#56C870"
                fw="600"
                title="Hire Talents"
                sc="scale(1.09)"
              />
              <Hold>
                <Navs1 onMouseEnter={onDisplay}>Login</Navs1>
                <ArrowDown />
                {display ? (
                  <Drop onMouseLeave={onDisplay}>
                    <Drop1>Client Login</Drop1>
                    <Drop1>Talent Login</Drop1>
                  </Drop>
                ) : null}
              </Hold>
            </CallToAction>
          </Main>
        </Container>
      ) : (
        <Container bg="1">
          <Main clr="1">
            <Link to="/">
              <Logo src={img} />
            </Link>
            <NavsHolder>
              <Navs to="/experts" clr="white">
                For Technology Experts
              </Navs>
              <Navs to="" clr="white">
                Business
              </Navs>
              <Navs to="/enterprise" clr="white">
                Enterprise
              </Navs>
            </NavsHolder>
            <CallToAction>
              <Navs to="" clr="white">
                Apply For Jobs
              </Navs>
              <Button
                bg="#56C870"
                fw="600"
                title="Hire Talents"
                sc="scale(1.09)"
              />
              <Hold>
                <Navs1 onMouseEnter={onDisplay}>Login</Navs1>
                <ArrowDown />
                {display ? (
                  <Drop onMouseLeave={onDisplay}>
                    <Drop1>Client Login</Drop1>
                    <Drop1>Talent Login</Drop1>
                  </Drop>
                ) : null}
              </Hold>
            </CallToAction>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Drop = styled.div`
  position: absolute;
  width: 120px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 40px;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
`;

const Drop1 = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  color: silver;
  justify-content: center;

  :hover {
    background-color: #d8d6d6;
    color: black;
    cursor: pointer;
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Container = styled.div<{
  bg: string;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 500ms;
  align-items: center;
  height: 75px;
  position: fixed;
  font-family: arial;
  top: 50px;
  z-index: 100;
  background-color: ${({ bg }) => (bg ? "" : "rgba(255, 255, 255, 0.977)")};
  font-size: 17px;
`;

const Main = styled.div<{
  clr: string;
}>`
  width: 95%;
  height: 100%;
  color: ${({ clr }) => (clr ? "white" : "black")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 200px;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled(NavLink)<{
  clr: string;
}>`
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ clr }) => clr};
`;

const Navs1 = styled.div`
  margin: 0 5px 0 30px;
  cursor: pointer;
`;

const CallToAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowDown = styled(IoIosArrowDown)`
  margin-right: 10px;
`;
