import React from "react";
import styled from "styled-components";

const TopLearnMore = () => {
  const [scrolls, setScrolls] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;

      if (scroll > 70) {
        setScrolls(true);
      } else {
        setScrolls(false);
      }
      window.addEventListener("scroll", handleScroll);
    };
    window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(scrolls)
  return (
    <div>
      {scrolls ? (
        <Container mr="15px">
          <BoldText>Andela acquires Qualified.io and Codewars</BoldText>
          <Learn>Learn More</Learn>
        </Container>
      ) : (
        <Container mr="">
          <BoldText>Andela acquires Qualified.io and Codewars</BoldText>
          <Learn>Learn More</Learn>
        </Container>
      )}
    </div>
  );
};

export default TopLearnMore;

const Container = styled.div<{
  mr: string;
}>`
  display: flex;
  font-family: arial;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #2b373d;
  height: 50px;
  background-color: white;
  position: fixed;
  margin-top: ${({ mr }) => mr};
  z-index: 100;
`;

const BoldText = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const Learn = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
`;
