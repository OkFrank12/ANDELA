import React from "react";
import styled from "styled-components";
import mark from "../../Assets/mark.jpg";
import guy from "../../Assets/shutterstock_1660490494-1024x683.jpg";
import girl from "../../Assets/shutterstock_1696088776-1024x683.jpg";
import man from "../../Assets/shutterstock_1653288229-1024x683.jpg";

const FindOutProps = () => {
  const data: {}[] = [
    {
      txt: "Find meaningful, long-term work with interesting organizations",
    },
    {
      txt: "Work with an internationally distributed team and company",
    },
    {
      txt: "Gain additional skills through exclusive learning opportunities",
    },
    {
      txt: "Network with other technologists to develop your expertise",
    },
  ];

  const newData: {}[] = [
    {
      txt: "Only work with companies we trust",
    },
    {
      txt: "Receive payments on time in your local currency, USD, or in Crypto",
    },
    {
      txt: "Discover salaries that match your skills and experience",
    },
  ];

  const moreData: {}[] = [
    {
      txt: "Ditch the commute and work from anywhere"
    },
    {
      txt: "With roles across different time zones, you choose when you work"
    },
    {
      txt: "Create a healthy, flexible work-life balance"
    },
  ]
  return (
    <div>
      <Container rev="">
        <Image src={guy} />
        <RightSider>
          <BigText>Grow your career with us</BigText>
          {data.map((el: any) => (
            <Holder>
              <Mark src={mark} />
              <div>{el.txt}</div>
            </Holder>
          ))}
        </RightSider>
      </Container>
      <Container rev="row-reverse">
        <Image src={girl} />
        <RightSider>
          <BigText>Set your own rate</BigText>
          {newData.map((el: any) => (
            <Holder>
              <Mark src={mark} />
              <div>{el.txt}</div>
            </Holder>
          ))}
        </RightSider>
      </Container>
      <Container rev="">
        <Image src={man} />
        <RightSider>
          <BigText>Work anytime, anywhere</BigText>
          {moreData.map((el: any) => (
            <Holder>
              <Mark src={mark} />
              <div>{el.txt}</div>
            </Holder>
          ))}
        </RightSider>
      </Container>
    </div>
  );
};

export default FindOutProps;

const RightSider = styled.div``;

const Image = styled.img`
  width: 650px;
`;

const BigText = styled.div`
  font-size: 35px;
  color: #132128;
  margin-bottom: 20px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 10px 0;
  font-family: arial;
`;

const Container = styled.div<{
  rev: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${({ rev }) => rev};
  padding: 30px 0;
  justify-content: space-between;
`;

const Mark = styled.img`
  margin-right: 10px;
`;
