import React from "react";
import FindOutProps from "../../Components/ReUse/FindOutProps";
import styled from "styled-components";

const FindOut = () => {
  return (
    <div>
      <Container>
        <Main>
          <BigText>
            <span>Find</span> what you’re looking for and more
          </BigText>
          <FindOutProps />
        </Main>
      </Container>
    </div>
  );
};

export default FindOut;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  color: #132128;
`;

const BigText = styled.div`
  font-size: 45px;
  text-align: center;

  span {
    font-style: italic;
  }
`;
