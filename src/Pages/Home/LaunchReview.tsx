import React from "react";
import styled from "styled-components";
import Button from "../../Components/Static/Button";

const LaunchReview = () => {
  return (
    <div>
      <Container>
        <Main>
          <Text>
            Andela Launches New Platform<br/> to <span>Power the Future</span> of
            Customized Work
          </Text>
          <Button
            title="Find Out More"
            w="170px"
            h="50px"
            bg="#56c870"
            sc="scale(1.09)"
          />
        </Main>
      </Container>
    </div>
  );
};

export default LaunchReview;

const Text = styled.div`
  font-size: 35px;
  color: white;

  span {
    font-style: italic;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 30px 0;
  background-color: #173b3f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
