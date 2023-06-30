import React from "react";
import styled from "styled-components";
import globe from "../../Assets/1-1-1.png";
import Button from "../../Components/Static/Button";

const ScalingTeam = () => {
  return (
    <div>
      <Container>
        <Main>
          <Image src={globe} />
          <TextPanel>
            <BigText>
              Scaling your team <span>globally</span> has never been this easy
            </BigText>
            <SmallText>
              Skilled engineers, product managers, and designers at your
              fingertips. An extensive list of technical services to suit your
              business needs. Cost-effective option for world-class expertise.
            </SmallText>
          <Button title="Work with us" bg="#56C870" w="120px" h="50px" sc="scale(1.09)"/>
          </TextPanel>
        </Main>
      </Container>
    </div>
  );
};

export default ScalingTeam;

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 30px 0;
  background-color: #b0d6ce;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Image = styled.img`
  width: 600px;
`;

const TextPanel = styled.div``;

const BigText = styled.div`
  font-size: 45px;
  width: 600px;

  span {
    font-style: italic;
  }
`;

const SmallText = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin: 20px 0;
  font-family: arial;
`;
