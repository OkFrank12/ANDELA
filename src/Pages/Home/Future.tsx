import React from "react";
import styled from "styled-components";
import Button from "../../Components/Static/Button";

const Future = () => {
  const data: any = [
    {
      txt: "110+",
      text: "Countries represented on 6 continents",
    },
    {
      txt: "96%",
      text: " Successful placement",
    },
    {
      txt: "84%",
      text: "Increased income for Andelans",
    },
    {
      txt: "175,000+",
      text: "Technologists represented",
    },
    {
      txt: "18+",
      text: "Months Average engagement",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <BigText>
              Welcome to the future of <span>meaningful, sustainable work</span>
            </BigText>
            <LongText>
              We believe that the sum is greater than our parts – our impact can
              be seen globally. We specialize in helping our highly-skilled,
              global technology talent community in emerging markets, connect
              with hundreds of leading companies
            </LongText>
          </Top>
          <BoxPanel>
            {data.map((el: any) => (
              <Box>
                <BigText1>{el.txt}</BigText1>
                <LongText1>{el.text}</LongText1>
              </Box>
            ))}
          </BoxPanel>
          <Bottom>
            <Button
              title="Apply For Remote Jobs"
              h="50px"
              bg="white"
              w="250px"
              sc="scale(1.09)"
              bor="1px solid black"
            />
            <Button
              title="Hire Talents"
              bg="#56C870"
              w="150px"
              h="50px"
              sc="scale(1.09)"
            />
          </Bottom>
        </Main>
      </Container>
    </div>
  );
};

export default Future;

const Bottom = styled.div`
  display: flex;
  width: 570px;
  display: flex;
  justify-content: space-between;
`;

const LongText1 = styled.div`
  font-size: 20px;
  width: 210px;
`;

const BigText1 = styled.div`
  font-size: 60px;
  margin: 0;
  font-family: arial;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Main = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #132128;
`;

const Top = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BigText = styled.div`
  font-size: 45px;
  width: 650px;

  span {
    font-style: italic;
  }
`;

const LongText = styled.div`
  font-weight: 350;
  font-size: 19px;
  font-family: arial;
  margin: 25px 0;
`;

const BoxPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const Box = styled.div`
  background-color: #b0d6ce;
  width: 400px;
  height: 300px;
  border-radius: 15px;
  margin: 10px;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
