import React from "react";
import styled from "styled-components";
import git from "../../Assets/logo-github-1.png";
import inVision from "../../Assets/logo-invision-1.png";
import cousre from "../../Assets/logo-coursera.png";
import kraft from "../../Assets/Kraft-Heinz-Logo.svg";
import seis from "../../Assets/seismic-logo.svg";
import goldss from "../../Assets/logo-goldman-sachs.png";

const Sponsor = () => {
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
      logo: seis,
    },
    {
      logo: goldss,
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Text>Trusted by</Text>
          <Holder>
            {data.map((el: any) => (
              <Logo src={el.logo} />
            ))}
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Sponsor;

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
  width: 80%;
  text-align: center;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Holder = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 200px;
`;
