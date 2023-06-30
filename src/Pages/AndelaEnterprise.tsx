import React from "react";
import Hero from "./Home/Hero";
import Button from "../Components/Static/Button";
import styled from "styled-components";
import EnterSponsors from "./Enterprises/EnterSponsors";
import Winnig from "./Enterprises/Winnig";
import AddValue from "./Enterprises/AddValue";
import SparkThousand from "./Custom/SparkThousand";
import ExpertsAround from "./Enterprises/ExpertsAround";
import Elevate from "./Enterprises/Elevate";
import ComingTogether from "./Home/ComingTogether";
import PropText from "../Components/ReUse/PropText";
import Slider from "react-slick";
import Card from "../Components/ReUse/Card";
import logic from "../Assets/Logitech-Logo-2015-present-copy-1024x576.png";
import branch from "../Assets/branch-logo-kale-1.png";
import fulk from "../Assets/Fluxx-logo-google-apps-copy.png";
import attune from "../Assets/attune-1024x343.png";
import goruf from "../Assets/gopuff.png";
import nebula from "../Assets/Nebula-color-stacked-kale.png";
import Empower from "./Enterprises/Empower";
import ScalingTeam from "./Enterprises/ScalingTeam";

const AndelaEnterprise = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: false,
  };
  return (
    <div>
      <Hero
        jcc="center"
        align="center"
        aic="center"
        fs="40px"
        url="url(https://andela.com/wp-content/uploads/2022/03/toby-osborn-ilHo9qgDEGY-unsplash-scaled.jpg)"
        txt="We’re here to help you build a world class team, today."
        moretxt="Trusted by enterprise teams and growing startups alike, Andela’s onboarding times are 70% faster than the industry average."
        holder={
          <Hold>
            <Button
              title="Schedule a Call"
              w="150px"
              h="50px"
              bg="#56C870"
              sc="scaleX(1.09)"
            />
            <Button
              title="Watch an overview"
              w="200px"
              h="50px"
              bg="white"
              sc="scaleX(1.09)"
            />{" "}
          </Hold>
        }
      />
      <EnterSponsors />
      <Winnig />
      <AddValue />
      <SparkThousand
        biggy="Build a brilliant team quickly"
        url="url(https://andela.com/wp-content/uploads/2022/03/section-bg-image.jpeg)"
        h="300px"
        w="650px"
        sw="680px"
        small="Save time and energy with instant access to thousands of technologists around the world in three easy steps"
        btxt="Smart skill matching"
        btxt1="Meet the best talent"
        btxt3="Continued excellence"
        stxt="Our intuitive machine learning and AI platform finds you the best match for any role."
        stxt2="Easily schedule interviews and connect with top technologists curated to fit your team’s needs."
        stxt4="Integrate your new team members quickly and effectively. Let us manage payroll and compliance."
        btn={
          <div>
            <Button
              title="Build your dream team"
              bg="#56C870"
              h="50px"
              sc="scale(1.09)"
              w="220px"
            />
            <Button
              title="Get the Enterprise advantage >"
              clr="white"
              w="280px"
            />
          </div>
        }
      />
      <ExpertsAround />
      <Elevate />
      <ComingTogether
        txt={
          <PropText
            txt1="Brilliant minds"
            txt2="and"
            txt3="companies"
            txt4="come together to build the future"
            wid="680px"
          />
        }
        more={
          <SlickPanel {...settings}>
            <Card
              text="I'm seeing more diverse opportunities at Andela, like Salesforce,
  DevOps. Different opportunities that I'm starting to take advantage
  of."
              brad=""
              w="150px"
              avatar={branch}
              bg="#B0D6CE"
            />
            <Card
              text="Andela provides excellent service and support, speedy, recruitment, and top-notch talent. They identify the perfect match skillset wise."
              brad=""
              w="130px"
              avatar={logic}
              bg="#E0F1EB"
            />
            <Card
              text="We have been working with our Andela teammates since 2018. They are so committed, work incredibly well with our team."
              brad=""
              w="130px"
              avatar={fulk}
              bg="#B0D6CE"
            />
            <Card
              text="We are getting a very large bang for your buck. The resources I have on my team are self-starters and are able to take direction and execute."
              brad=""
              w="130px"
              avatar={attune}
              bg="#E0F1EB"
            />
            <Card
              text="The team have been very transparent when sourcing our need and if we need to change direction they are able to quickly turn around."
              brad=""
              w="130px"
              avatar={goruf}
              bg="#B0D6CE"
            />
            <Card
              text="The caliber of their talents, the enthusiasm and commitment of their talent, and the velocity and the velocity of hiring are truly exceptional."
              avatar={nebula}
              bg="#E0F1EB"
              w="100px"
            />
          </SlickPanel>
        }
      />
      <Empower />
      <ScalingTeam />
    </div>
  );
};

export default AndelaEnterprise;

const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 520px;
`;

const SlickPanel = styled(Slider)`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  cursor: grab;
  margin-top: 50px;
`;
