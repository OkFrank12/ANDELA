import React from "react";
import styled from "styled-components";
import git from "../../Assets/logo-github-1.png";
import inVision from "../../Assets/logo-invision-1.png";
import cousre from "../../Assets/logo-coursera.png";
import kraft from "../../Assets/Kraft-Heinz-Logo.svg";
import seis from "../../Assets/seismic-logo.svg";
import goldss from "../../Assets/logo-goldman-sachs.png";
import casper from "../../Assets/logo-casper-1-1.png";
import clud from "../../Assets/logo-cloudflare-1.png";
import mind from "../../Assets/logo-mindshare-1.png";
import plu from "../../Assets/logo-pluralsight-1.png";
import viac from "../../Assets/logo-viacomcbs.png";
import Slider from "react-slick";

const EnterSponsors: React.FC = () => {
  const data: any = [
    {
      logo: git,
    },
    {
      logo: inVision,
    },
    {
      logo: cousre,
    },
    {
      logo: kraft,
    },
    {
        logo: goldss,
    },
    {
        logo: casper,
    },
    {
        logo: clud,
    },
    {
      logo: seis,
    },
    {
      logo: mind,
    },
    {
      logo: plu,
    },
    {
      logo: viac,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Container>
        <Main>
          <Text>We’re trusted by the best</Text>
          <Holder {...settings}>
            {data.map((el: any) => (
              <Logo src={el.logo} />
            ))}
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default EnterSponsors;

const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 25px 0;
  background-color: #e0f1eb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 97%;
  text-align: center;
  overflow: hidden;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Holder = styled(Slider)`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  margin: 0 50px;
  width: 200px;
`;
