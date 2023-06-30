import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";
import new_ from "../../Assets/Andela_NewLogos.png";
import mark from "../../Assets/mark.jpg";
import vis from "../../Assets/Visual-3.png";

const BuildEmpower = () => {
  const data: any = [
    {
      txt: "Long-term placements",
    },
    {
      txt: "Trusted career partner",
    },
    {
      txt: "Career Guidance",
    },
    {
      txt: "96% match success",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Section fd="">
            <Img src={new_} />
            <RightSideText>
              <SmallBoldText>Build your team today</SmallBoldText>
              <LargeText>
                We’ve cracked the code on creating engineering teams
              </LargeText>
              <LightText>
                Skilled engineers, product managers, and designers at your
                fingertips. An extensive list of technical services to suit your
                business needs. Start building your world-class team faster with
                talent from Andela.
              </LightText>
              <Button
                title="Build Your Team"
                bg="#56C870"
                sc="scale(1.09)"
                w="170px"
                h="50px"
              />
            </RightSideText>
          </Section>
          <Section fd="1">
            <Img1 src={vis} />
            <RightSideText1>
              <SmallBoldText>Empower your future</SmallBoldText>
              <LargeText>
                Why <span>the world’s best talent</span> prefers Andela
              </LargeText>
              <Max>
                {data.map((el: any) => (
                  <Holder>
                    <Mark src={mark} />
                    <Text>{el.txt}</Text>
                  </Holder>
                ))}
              </Max>
              <Button
                title="Find Tech Experts"
                bg="#56C870"
                sc="scale(1.09)"
                w="170px"
                h="50px"
              />
            </RightSideText1>
          </Section>
        </Main>
      </Container>
    </div>
  );
};

export default BuildEmpower;

const Img1 = styled.img`
  width: 750px;
  margin-top: 50px;
`;

const Max = styled.div`
  margin: 20px 0;
`;

const RightSideText1 = styled.div`
  width: 400px;
`;

const Holder = styled.div`
  display: flex;
  margin: 15px;
`;

const Mark = styled.img`
  margin-right: 10px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  font-family: arial;
`;

const Section = styled.div<{
  fd: string;
}>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 70px;
  flex-direction: ${({ fd }) => (fd ? "row-reverse" : "")};
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 500px;
  height: 320px;
`;

const RightSideText = styled.div`
  width: 700px;
  height: 400px;
  flex-direction: column;
  color: #132128;
  display: flex;
`;

const SmallBoldText = styled.div`
  font-weight: bold;
  margin-top: 20px;
  font-family: arial;
`;

const LargeText = styled.div`
  font-size: 45px;
  margin: 5px 0 20px 0;

  span {
    font-style: italic;
  }
`;

const LightText = styled.div`
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 20px;
  font-family: arial;
  width: 680px;
  line-height: 1.8;
`;
