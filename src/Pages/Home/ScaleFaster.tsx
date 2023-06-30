import React from "react";
import styled from "styled-components";


interface iScale {
  txt1?: string;
  txt2?: string;
  txt3?: string;
  txt4?: string;
  btn?: any;
}

const ScaleFaster: React.FC<iScale> = ({ txt1, txt2, txt3, txt4, btn }) => {
  const props: any = [
    {
      stack: "Python",
    },
    {
      stack: "Node.js",
    },
    {
      stack: "Kotlin",
    },
    {
      stack: "Flask",
    },
    {
      stack: "React Native",
    },
    {
      stack: "Ruby",
    },
    {
      stack: "C#",
    },
    {
      stack: "DevOps",
    },
    {
      stack: "Golang",
    },
    {
      stack: "Data Scientists",
    },
    {
      stack: "React.js",
    },
    {
      stack: "Swift",
    },
    {
      stack: "Salesforce",
    },
    {
      stack: "Java",
    },
    {
      stack: "Django",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <SmallText>{txt1}</SmallText>
            <BigText>{txt2}</BigText>
            <BigText>{txt3}</BigText>
            <SmallText>{txt4}</SmallText>
          </Top>
          <StacksPanel>
            {props.map((el: any) => (
              <Stack>{el.stack}</Stack>
            ))}
          </StacksPanel>
          {btn}
        </Main>
      </Container>
    </div>
  );
};

export default ScaleFaster;

const Stack = styled.div`
  width: 270px;
  padding-left: 15px;
  border-radius: 35px;
  margin: 15px;
  display: flex;
  align-items: center;
  font-family: arial;
  cursor: pointer;
  font-size: 18px;
  background-color: white;
  transition: all 400ms;
  height: 60px;

  :hover {
    transform: scale(1.09);
    color: #56c870;
  }
`;

const StacksPanel = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #edeff1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
  min-height: 65vh;
  padding: 20px 0;
`;

const Main = styled.div`
  display: flex;
  color: #132128;
  align-items: center;
  width: 95%;
  height: 100%;
  flex-direction: column;
`;

const Top = styled.div`
  text-align: center;
`;

const BigText = styled.div`
  font-size: 50px;
`;

const SmallText = styled.div`
  font-weight: 500;
  font-family: arial;
`;