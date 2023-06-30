import React from "react";
import styled from "styled-components";
import Button from "../../Components/Static/Button";

const Brilliance = () => {
  return (
    <div>
      <Container>
        <Cover>
          <Main>
            <BigText>
              Connecting <span>your brilliance </span>with opportunity
            </BigText>
            <br />
            <Button title="Apply to the Talent Network" bg="#56C870" h="50px" sc="scale(1.09)"/>
          </Main>
        </Cover>
      </Container>
    </div>
  );
};

export default Brilliance;

const BigText = styled.div`
  font-size: 45px;
  width: 580px;

  span {
    font-style: italic;
  }
`;

const Cover = styled.div`
  background-color: rgba(26, 55, 51, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 95%;
  height: 75%;
  color: white;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  height: 60vh;
  background-image: url(https://andela.com/wp-content/uploads/2022/03/african-american-young-programmer-working-remote-f-2022-03-25-18-49-53-utc.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
