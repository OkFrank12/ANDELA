import React from "react";
import styled from "styled-components";

const Commitments = () => {
  const data: any = [
    {
      big: "Technologist first culture",
      small:
        "Ensuring a seamless experience for technologists is our top priority. You can rest assured there is always someone looking out for your interests and career.",
    },
    {
      big: "Trusted platform",
      small:
        "We only work with trusted and vetted companies. No matter what, we’ll ensure you are paid for the work you do, and on time.",
    },
    {
      big: "Global support",
      small:
        "Wherever you are, and whatever issues you may face, we’re here to help solve any disputes, fast!",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <LeftSider>
            <BigText fs="45px" w="430px">
              Our commitment to <span>your success</span>
            </BigText>
          </LeftSider>
          <RightSider>
            {data.map((el: any) => (
              <Div>
                <BigText fs="35px" w="">
                  {el.big}
                </BigText>
                <SmallText>{el.small}</SmallText>
              </Div>
            ))}
          </RightSider>
        </Main>
      </Container>
    </div>
  );
};

export default Commitments;

const LeftSider = styled.div`
  height: 73%;
`;

const Div = styled.div`
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0e0909;
`;

const BigText = styled.div<{
  fs: string;
  w: string;
}>`
  font-size: ${({ fs }) => fs};
  width: ${({ w }) => w};

  span {
    font-style: italic;
  }
`;

const RightSider = styled.div`
  width: 680px;
`;

const SmallText = styled.div`
  font-size: 20px;
  margin: 10px 0;
  line-height: 1.5;
  font-family: arial;
`;
