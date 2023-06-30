import React from "react";
import styled from "styled-components";
import Button from "../../Components/Static/Button";

const Elevate = () => {
  const data: {}[] = [
    {
      txt: "Python",
    },
    {
      txt: "Salesforce",
    },
    {
      txt: "React Native",
    },
    {
      txt: "Node.Js",
    },
    {
      txt: "Javscript",
    },
    {
      txt: "Vue.Js",
    },
    {
      txt: "Golang",
    },
    {
      txt: "Ruby",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <LeftHolder>
            <BigText>
              Elevate your <span>business</span> with in demand skills
            </BigText>
            <SmallText>
              We will help you find the right fit for your business.
            </SmallText>
            <Button
              title="Choose Andela"
              bor="1px solid black"
              w="150px"
              h="50px"
            />
          </LeftHolder>
          <RightHolder>
            {data.map((el: any) => {
              return <Stack>{el.txt}</Stack>;
            })}
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Elevate;

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eceff0;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftHolder = styled.div``;

const RightHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 51%;
`;

const BigText = styled.div`
  font-size: 55px;
  width: 600px;
  span {
    font-style: italic;
  }
`;

const SmallText = styled.div`
  font-size: 20px;
  margin: 25px 0;
  font-family: arial;
`;

const Stack = styled.div`
  width: 280px;
  padding-left: 15px;
  border-radius: 35px;
  margin: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: arial;
  font-size: 18px;
  background-color: white;
  transition: all 400ms;
  height: 60px;

  :hover {
    transform: scale(1.09);
    color: #56c870;
  }
`;
