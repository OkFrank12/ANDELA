import React from "react";
import styled from "styled-components";
import Button from "../../Components/Static/Button";
import image from "../../Assets/section-image-7-1024x897.png";

const ExpertsAround = () => {
  const data: any = [
    {
      txt1: "Hire Individuals",
      txt2: "Find the right technologist to complement your existing team and hit the ground running on impactful initiatives.",
    },
    {
      txt1: "Build Teams",
      txt2: "Scale rapidly with a full team of technologists embedded at your company to unlock more growth and potential.",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <BigSlant>
              <span>Experts</span> from around the world
            </BigSlant>
            <SmallText>
              With flexibility in mind, we’ve built our matching process to
              easily scale up or down based on your team’s changing needs.
            </SmallText>
          </Top>
          <Section>
            <Image src={image} />
            <TextPanel>
              {data.map((el: any) => {
                return (
                  <div>
                    <BigText>{el.txt1}</BigText>
                    <Small>{el.txt2}</Small>
                    <br />
                    <br />
                  </div>
                );
              })}
              <Button
                title="Discover Talent"
                bg="#56c870"
                w="150px"
                h="50px"
                sc="scale(1.09)"
              />
            </TextPanel>
          </Section>
        </Main>
      </Container>
    </div>
  );
};

export default ExpertsAround;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Top = styled.div`
  text-align: center;
`;

const SmallText = styled.div`
  font-size: 20px;
  width: 700px;
  margin: 20px 0;
  font-family: Arial;
`;

const BigSlant = styled.div`
  font-size: 50px;
  span {
    font-style: italic;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 700px;
`;

const TextPanel = styled.div``;

const BigText = styled.div`
  font-size: 38px;
`;

const Small = styled.div`
  font-size: 20px;
  width: 630px;
  margin-top: 20px;
  line-height: 1.5;
  font-family: arial;
`;
