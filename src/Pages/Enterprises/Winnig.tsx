import React, { useState } from "react";
import styled from "styled-components";

const Winnig = () => {
  const [data, setData] = useState<{}[]>([
    {
      big: "Source",
      small:
        "We’ll work with you to fully understand your technical gaps, culture, industry regulations, and strategic route. Instantly view a curated selection of technologist profiles that meet your needs.",
    },
    {
      big: "Assess",
      small:
        "Our proprietary assessments are designed to find you the best talent by role, no matter where they are in the world. Based on your team’s goals, meet vetted technologists you can trust.",
    },
    {
      big: "Match",
      small:
        "Connect within hours, with vetted technologists who can easily align with your existing teams, tools, and workflows. Our matching times are consistently twice as fast compared to industry standards.",
    },
    {
      big: "Delivery",
      small:
        "With a focus on sustainable growth, we’re with you every step of the way. From rapid onboarding and seamless integration to global payroll solutions and compliance support.",
    },
  ]);
  console.log(setData);
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <BoldText>
              We create <span>winning</span> teams
            </BoldText>
            <SmallText fs="" ff="1" ta="1" fsi="1">
              We help you source, evaluate, and hire specialized talent
              compliant with local laws in 100 countries.
            </SmallText>
            <Panel>
              {data.map((el: any) => {
                return (
                  <Box>
                    <SmallText fs="1" ff="" ta="" fsi="">
                      {el.big}
                    </SmallText>
                    <Tiny>{el.small}</Tiny>
                  </Box>
                );
              })}
            </Panel>
          </Top>
        </Main>
      </Container>
    </div>
  );
};

export default Winnig;

const Tiny = styled.div`
  font-family: Arial;
  line-height: 1.5;
  font-size: 15px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 30px 0;
  background-color: #f8f8f8;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
  color: #01383d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div``;

const BoldText = styled.div`
  font-size: 40px;
  text-align: center;
`;

const SmallText = styled.div<{
  ff: string;
  fs: string;
  ta: string;
  fsi: string;
}>`
  font-size: ${({ fsi }) => (fsi ? "20px" : "25px")};
  font-family: ${({ ff }) => (ff ? "arial" : "")};
  font-style: ${({ fs }) => (fs ? "italic" : "")};
  text-align: ${({ ta }) => (ta ? "center" : "")};
`;

const Panel = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Box = styled.div`
  padding: 15px;
  border-radius: 10px;
  width: 265px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 200px;
  background-color: white;
`;
