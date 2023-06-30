import React from "react";
import styled from "styled-components";
import vis from "../../Assets/Visual-3.png";
import mark from "../../Assets/mark.jpg";
import Button from "../../Components/Static/Button";

const Empower = () => {
  const data: {}[] = [
    {
      txt: "Long-term placements",
    },
    {
      txt: "Competitive compensation",
    },
    {
      txt: "Career guidance",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Image src={vis} />
          <RightHolder>
            <Tiny>Empower your future</Tiny>
            <LargeText>
              Why <span>the world’s best talent</span> prefers Andela
            </LargeText>
            {data.map((el: any) => (
              <Holder>
                <Mark src={mark} />
                {el.txt}
              </Holder>
            ))}
            <Button title="Find Talents" bg="#56C870" w="120px" h="50px"/>
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Empower;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 30px 0;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

const Image = styled.img`
  width: 500px;
`;

const RightHolder = styled.div``;

const Tiny = styled.div`
  font-weight: 600;
  font-family: arial;
`;

const LargeText = styled.div`
  font-size: 45px;
  width: 650px;
  margin: 10px 0 25px 0;

  span {
    font-style: italic;
  }
`;

const Holder = styled.div`
  font-size: 18px;
  display: flex;
  margin: 20px 0;
  font-family: arial;
  align-items: center;
`;

const Mark = styled.img`
  margin-right: 10px;
`;
