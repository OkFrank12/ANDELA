import React from "react";
import styled from "styled-components";
import { BigCardProps } from "../../Components/ReUse/BigCardProps";
import accent from "../../Assets/circle-accent-purple.svg";
import accent1 from "../../Assets/circle-accent-yellow.svg";
import accent2 from "../../Assets/circle-accent-red.svg";
import Slider from "react-slick";
import Button from "../../Components/Static/Button";

interface iAny {
  txt1?: string;
  txt2?: string;
  props?: string;

  props1?: string;
  props2?: string;
  props3?: string;
  props4?: string;
  props5?: string;
  props6?: string;
  hint: string;
}

const AnyTime: React.FC<iAny> = ({
  txt1,
  txt2,
  props1,
  props2,
  props3,
  props4,
  props5,
  props6,
  props,
  hint,
}) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: false,
    className: "center",
    centerMode: true,
  };

  /**
   * className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
   */

  return (
    <div>
      <Container>
        <Top>
          <BigText>{txt1}</BigText>
          <SmallText>{txt2}</SmallText>
        </Top>
        <Bottom {...setting}>
          <BigCardProps bg="#4A1476" bigtext={props} img={accent} Hint={hint}/>
          <BigCardProps bigtext={props1} img={accent1} bg="#C95227" Hint={hint}/>
          <BigCardProps bg="#701340" bigtext={props2} img={accent2} Hint={hint}/>
          <BigCardProps bg="#C95227" bigtext={props3} img={accent1} Hint={hint}/>
          <BigCardProps bg="#4A1476" bigtext={props4} img={accent} Hint={hint}/>
          <BigCardProps bg="#701340" bigtext={props5} img={accent2} Hint={hint}/>
          <BigCardProps bg="#C95227" bigtext={props6} img={accent1} Hint={hint}/>
        </Bottom>
        <br />
        <Button
          title="All case studies"
          w="180px"
          h="50px"
          bor="1px solid black"
          sc="scale(1.09)"
        />
      </Container>
    </div>
  );
};

export default AnyTime;

const Bottom = styled(Slider)`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
`;

const Top = styled.div`
  color: #132128;
  text-align: center;
`;

const BigText = styled.div`
  font-size: 42px;
  width: 700px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin: 30px 0;
  font-family: arial;
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  padding: 30px 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;
