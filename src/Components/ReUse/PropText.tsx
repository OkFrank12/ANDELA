import React from "react";
import styled from "styled-components";

interface iText {
  txt1?: string;
  txt2?: string;
  txt3?: string;
  txt4?: string;
  wid?: string;
}
//Brilliant minds
//and
//companies
//come together to build the future
const PropText: React.FC<iText> = ({ txt1, txt2, txt3, txt4, wid }) => {
  return (
    <Div wid={`${wid}`}>
      <span>{txt1} </span>
      {txt2} <span>{txt3} </span>
      {txt4}
    </Div>
  );
};

export default PropText;

const Div = styled.div<{
  wid: string;
}>`
  width: ${({ wid }) => wid};
`;
