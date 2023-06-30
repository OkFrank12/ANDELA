import React from "react";
import styled from "styled-components";

interface iBtn {
  bg?: string;
  fw?: string;
  w?: string;
  h?: string;
  title: string;
  sc?: string;
  bor?: string;
  clr?: string;
}

const Button: React.FC<iBtn> = ({ bor, bg, fw, w, h, title, sc, clr }) => {
  return (
    <div>
      <Container clr={`${clr}`} bor={`${bor}`} sc={`${sc}`} bg={`${bg}`} fw={`${fw}`} w={`${w}`} h={`${h}`}>
        {title}
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  bg: string;
  fw: string;
  w: string;
  sc: string;
  bor: string;
  h: string;
  clr: string;
}>`
  padding: 10px 35px;
  background-color: ${({ bg }) => bg};
  color: #181d20;
  font-size: 20px;
  color: ${({clr}) => clr};
  display: flex;
  font-family: arial;
  border: ${({bor}) => bor};
  align-items: center;
  justify-content: center;
  font-weight: ${({ fw }) => fw};
  border-radius: 30px;
  transition: all 350ms;
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  :hover {
    transform: ${({sc}) => sc};
    cursor: pointer;
  }
`;
