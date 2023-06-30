import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";

const Potential = () => {
  return (
    <div>
      <Container>
        <Cover>
          <Main>
            <LeftSider>
              <BigText>
                <span>Grow your potential beyond borders</span>
              </BigText>
              <SmallText w="" fw="">
                Connect with a global network and land international
                opportunities.
              </SmallText>
              <br />
              <Button
                title="Discover Opportunities"
                w="230px"
                h="50px"
                bg="#56C870"
                sc="scale(1.09)"
              />
            </LeftSider>
          </Main>
        </Cover>
      </Container>
    </div>
  );
};

export default Potential;

const Container = styled.div`
  height: 70vh;
  background-image: url(https://andela.com/wp-content/uploads/2022/03/shutterstock_1862846512-2048x1434.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 95%;
  height: 75%;
  display: flex;
  align-items: center;
  color: white;
`;

const LeftSider = styled.div``;

const BigText = styled.div`
  font-size: 50px;
  font-weight: 500;

  span {
    font-style: italic;
  }
`;

const SmallText = styled.div<{
  w: string;
  fw: string;
}>`
  font-size: 20px;
  margin: 20px 0;
  width: ${({ w }) => w};
  font-family: arial;
  font-weight: ${({ fw }) => fw};
`;

const Cover = styled.div`
  background-color: rgba(26, 55, 51, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
