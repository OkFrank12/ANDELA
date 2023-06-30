import React from "react";
import styled from "styled-components";
import img1 from "../../Assets/section-image-3.jpg";
import img2 from "../../Assets/shutterstock_1910023657-1-1024x683.jpg";

const AddValue = () => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <BigText>
              Let’s help you<span> add value</span> to your business
            </BigText>
            <SmallText w="">
              {" "}
              Discover our global neighborhood of technologists.
            </SmallText>
          </Top>
          <Section1>
            <TextSide>
              <BigText>Speed to match</BigText>
              <SmallText w="1">
                Move faster without sacrificing quality. Our team can radically
                reduce the time it takes to hire talent so you can find the
                right fit, quickly.
              </SmallText>
            </TextSide>
            <Image src={img1} />
          </Section1>
          <Section1>
            <Image src={img2} />
            <TextSide>
              <BigText>Enterprise-ready</BigText>
              <SmallText w="1">
                Technologists with verified backgrounds, aligned to your time
                zones, and compliant with your company’s security practices so
                you can focus on making an impact.
              </SmallText>
            </TextSide>
          </Section1>
          <Section1>
            <TextSide>
              <BigText>Flexible Teams</BigText>
              <SmallText w="1">
                Find niche expertise for various project lengths. Onboard solo
                engineers to fill gaps or hire full teams to accelerate your
                build. Any team, any timezone, any skills.
              </SmallText>
            </TextSide>
            <Image src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1241581108.jpg" />
          </Section1>
        </Main>
      </Container>
    </div>
  );
};

export default AddValue;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Top = styled.div`
  text-align: center;
`;

const BigText = styled.div`
  font-size: 45px;

  span {
    font-style: italic;
  }
`;

const SmallText = styled.div<{
  w: string;
}>`
  font-size: 20px;
  margin-top: 20px;
  font-family: arial;
  width: ${({ w }) => (w ? "650px" : "")};
`;

const Section1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 50px 0;
`;

const Image = styled.img`
  width: 600px;
`;

const TextSide = styled.div``;
