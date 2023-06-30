import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface iPropsing {
  txt?: any;
  more?: any;
}

const ComingTogether: React.FC<iPropsing> = ({ txt, more }) => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            {txt}
          </Top>
            {more}  
        </Main>
      </Container>
    </div>
  );
};

export default ComingTogether;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Main = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #132128;
  justify-content: center;
`;

const Top = styled.div`
  font-size: 43px;
  text-align: center;
  span {
    font-style: italic;
  }
`;
