import React from "react";
import styled from "styled-components";
import Button from "../Static/Button";

interface iProps {
  bigtext: any;
  img: any;
  bg: string;
  Hint: string;
}

export const BigCardProps: React.FC<iProps> = ({ bigtext, img, bg, Hint }) => {
  return (
    <div>
      <Container bg={`${bg}`}>
        <Main>
          <Txt>{Hint}</Txt>
          <BigText>{bigtext}</BigText>
          <Button
            title="Learn more"
            clr="white"
            bor="1px solid white"
            w="120px"
          />
        </Main>
        <Img src={img} />
      </Container>
    </div>
  );
};

const Container = styled.div<{
    bg: string;
}>`
  width: 700px;
  height: 370px;
  background-color: ${({bg}) => bg};
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin: 0 20px;
`;

const Main = styled.div`
  width: 40%;
  margin-left: 20px;
`;

const Img = styled.img``;

const Txt = styled.div`
  font-size: 18px;
  font-style: italic;
`;

const BigText = styled.div`
  font-size: 22px;
  font-weight: 500;
  font-family: arial;
  margin: 20px 0;
`;
