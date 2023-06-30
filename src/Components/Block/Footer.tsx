import React from "react";
import styled from "styled-components";
import andela from "../../Assets/andelaFoot.jpg";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { BsFillPlayBtnFill } from "react-icons/bs";
import icon from "../../Assets/icon.jpg";

const Footer = () => {
  const iconMap: any = [
    {
      icon: <FaFacebook />,
    },
    {
      icon: <FaTwitter />,
    },
    {
      icon: <FaGithub />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <BsFillPlayBtnFill />,
    },
    {
      icon: <FaLinkedin />,
    },
  ];

  const data: {}[] = [
    {
      head: "Discover Talent",
      navs: "For Companies",
      navs1: "Enterprise",
      navs2: "Case Study",
    },
    {
      head: "Find Work",
      navs: "For Technologist",
      navs1: "Learning Community",
      navs2: "Leadership Programs",
      navs3: "Resources",
    },
    {
      head: "Andela",
      navs: "About us",
      navs1: "Events",
      navs2: "Blog",
      navs3: "Press Center",
      navs4: "Careers",
    },
    {
      head: "Privacy Policy",
      navs: "Terms and Conditions",
      navs1: "Modem Slavery Statements",
      navs2: "Accessibility Statement",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Section1>
            <Logo src={andela} />
            <SocialMedia>
              {iconMap.map((el: any) => (
                <Icons>{el.icon}</Icons>
              ))}
            </SocialMedia>
            <Img src={icon} />
            <Copy>
              <AiOutlineCopyright />
              <span>2023 Andela. All right reserved</span>
            </Copy>
          </Section1>
          {data.map((el: any) => (
            <Section>
              <Head>{el.head}</Head>
              <Navs>{el.navs}</Navs>
              <Navs>{el.navs1}</Navs>
              <Navs>{el.navs2}</Navs>
              <Navs>{el.navs3}</Navs>
              <Navs>{el.navs4}</Navs>
            </Section>
          ))}
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const Navs = styled.div`
  font-size: 13px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    text-decoration-line: underline;
  }
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const Section = styled.div`
  margin: 0 50px;
`;

const Img = styled.img`
  width: 80px;
  margin-bottom: 80px;
  transition: all 350ms;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Section1 = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Copy = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 13px;
  }
`;

const Logo = styled.img`
  margin: 20px 0 40px 0;
  width: 200px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Icons = styled.div`
  font-size: 30px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: arial;
  padding: 50px 0;
  color: white;
  background-color: #173b3f;
`;

const Main = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content: space-between;
`;
