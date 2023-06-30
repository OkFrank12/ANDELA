import React from "react";
import Header from "../../Components/Block/Header";
import styled from "styled-components";

interface iHero {
  txt?: string;
  span?: string;
  moretxt?: string;
  fs: string;
  url?: string;
  txt2?: string;
  holder?: any;
  w?: string;
  textWidth?: string;
  jcc?: string;
  aic?: string;
  align?: string;
}

const Hero: React.FC<iHero> = ({
  txt,
  span,
  aic,
  moretxt,
  txt2,
  url,
  holder,
  w,
  textWidth,
  fs,
  jcc,
  align,
}) => {
  return (
    <div>
      <Container url={`${url}`}>
        <Header />
        <Cover>
          <Main jcc={`${jcc}`} a={`${align}`} aic={`${aic}`}>
            <BigSlantText w={`${w}`} fs={`${fs}`}>
              {txt} <span>{span}</span> {txt2}
            </BigSlantText>
            <StraightLineText textWidth={`${textWidth}`}>
              {moretxt}
            </StraightLineText>
            <Holder>{holder}</Holder>
          </Main>
        </Cover>
      </Container>
    </div>
  );
};

export default Hero;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StraightLineText = styled.div<{
  textWidth: string;
}>`
  margin: 35px 0;
  width: ${({ textWidth }) => textWidth};
  font-family: arial;
`;

const BigSlantText = styled.div<{
  w: string;
  fs: string;
}>`
  font-weight: 500;
  font-size: ${({ fs }) => fs};
  width: ${({ w }) => w};

  span {
    font-style: italic;
  }
`;

const Cover = styled.div`
  background-color: rgba(26, 55, 51, 0.6);
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Main = styled.div<{
  jcc: string;
  a: string;
  aic: string;
}>`
  width: 95%;
  height: 75%;
  margin-top: 120px;
  flex-direction: column;
  display: flex;
  align-items: ${({aic}) => aic};
  color: white;
  text-align: ${({ a }) => a};
  justify-content: ${({ jcc }) => jcc};
  font-size: 17px;
`;

const Container = styled.div<{
  url: string;
}>`
  height: 100vh;
  background-image: ${({ url }) => url};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
