import React from "react";
import Hero from "./Home/Hero";
import LaunchReview from "./Home/LaunchReview";
import Sponsor from "./Home/Sponsor";
import BuildEmpower from "./Home/BuildEmpower";
import ComingTogether from "./Home/ComingTogether";
import Future from "./Home/Future";
import AnyTime from "./Home/AnyTime";
import ScaleFaster from "./Home/ScaleFaster";
import Button from "../Components/Static/Button";
import styled from "styled-components";
import PropText from "../Components/ReUse/PropText";
import Card from "../Components/ReUse/Card";
import avatar from "../Assets/Adetola-Ahmed-talent-profile-150x150.jpg";
import logic from "../Assets/Logitech-Logo-2015-present-copy-1024x576.png";
import branch from "../Assets/branch-logo-kale-1.png";
import avatar1 from "../Assets/Adeyinka-Alabi-2-Talent-homepage-150x150.jpg";
import avatar2 from "../Assets/Rafael-Henrique-talent-profile-150x150.jpg";
import fulk from "../Assets/Fluxx-logo-google-apps-copy.png";
import attune from "../Assets/attune-1024x343.png";
import goruf from "../Assets/gopuff.png";
import user from "../Assets/user.png";
import ibm from "../Assets/ibm.png.webp";
import nebula from "../Assets/Nebula-color-stacked-kale.png";
import Slider from "react-slick";

const Andela = () => {
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
        txt2="talent around the world"
        fs="70px"
        span="Brilliant"
        txt="Discover"
        moretxt="Join Andela to build your team with developers, engineers, product designers, and the best remote technology experts."
        url="url(https://andela.com/wp-content/uploads/2022/03/header-jpeg-webp.webp)"
        holder={
          <Hold>
            <Button
              title="Hire Talents"
              w="120px"
              h="50px"
              bg="#56C870"
              sc="scaleX(1.09)"
            />
            <Button
              title="Apply For Jobs"
              w="140px"
              h="50px"
              bg="white"
              sc="scaleX(1.09)"
            />{" "}
          </Hold>
        }
        w="800px"
      />
      <LaunchReview />
      <Sponsor />
      <BuildEmpower />
      <ComingTogether
        more={
          <SlickPanel {...settings}>
            <Card
              text="We love working with Andela. Overall we've have a great experience with the engineering talent who have joined Branch"
              avatar={avatar}
              bg="#fdf0dc"
              brad="50%"
              w="70px"
              h="70px"
              name="Adetola"
              country="Nigeria"
            />
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
              text="Andela has helped me to believe, dream big, break barriers, to do the impossible."
              brad="50%"
              w="70px"
              avatar={avatar1}
              bg="#fdf0dc"
              h="70px"
              name="Adeyinka"
              country="Nigeria"
            />
            <Card
              text="Andela provides excellent service and support, speedy, recruitment, and top-notch talent. They identify the perfect match skillset wise."
              brad=""
              w="130px"
              avatar={logic}
              bg="#EBE0FF"
            />
            <Card
              text="A few months have passed, and I have absolutely no regrets. My career fast forwarded in about five years to what I was expecting."
              brad="50%"
              w="70px"
              avatar={avatar2}
              bg="#B0D6CE"
              h="70px"
              name="Rafael"
              country="Brazil"
            />
            <Card
              text="We have been working with our Andela teammates since 2018. They are so committed, work incredibly well with our team."
              brad=""
              w="130px"
              avatar={fulk}
              bg="#FCE1E1"
            />
            <Card
              text="We are getting a very large bang for your buck. The resources I have on my team are self-starters and are able to take direction and execute."
              brad=""
              w="130px"
              avatar={attune}
              bg="#FDF0DC"
            />
            <Card
              text="The team have been very transparent when sourcing our need and if we need to change direction they are able to quickly turn around."
              brad=""
              w="130px"
              avatar={goruf}
              bg="#B0D6CE"
            />
            <Card
              text="One of my biggest concern was timezone and hours overlap. As the collaboration progressed, it was hardly noticeable. Andela resources."
              brad="50%"
              w="70px"
              avatar={user}
              bg="#FCE1E1"
              h="70px"
              name="Kaji"
              country="Great Britain"
            />
            <Card
              text="The Andela Staff was quick to meet me as a new team manager to introduce themselves and discuss their roles and responsibilities. We."
              brad="50%"
              w="70px"
              avatar={user}
              bg="#EBE0FF"
              h="70px"
              name="Tony"
              country="United States"
            />
            <Card
              text="Working with Andela is one of the most important and best decisions we ever made so far as an early stage company. I have worked with."
              brad="50%"
              w="70px"
              avatar={user}
              bg="#FDF0DC"
              h="70px"
              name="Makan"
              country="United States"
            />
            <Card
              text="A fantastic service providing top quality Technical Support Engineers."
              brad="50%"
              w="70px"
              avatar={user}
              bg="#E0F1EB"
              h="70px"
              name="Matt"
              country="United States"
            />
            <Card
              text="Working with the Andela team has been great. They know their work and professionals."
              brad="50%"
              w="70px"
              avatar={user}
              bg="#B0D6CE"
              h="70px"
              name="Florence"
              country="Kenya"
            />
            <Card
              text="Good Engineers, who have worked with us for years!"
              brad="50%"
              w="70px"
              avatar={user}
              bg="#FCE1E1"
              h="70px"
              name="Alexander"
              country="United States"
            />
            <Card
              text='We started with Andela in a "staff aug" capacity as a pilot to evacuate the strenght of folks they could bring to the table. Our experience to date.'
              brad="50%"
              w="70px"
              avatar={user}
              bg="#EBE0FF"
              h="70px"
              name="ML"
              country="United States"
            />
            <Card
              text="Andela is a relatively new partner for us; However, they have quickly become one of our top suppliers and are able to turn-around talents."
              avatar={ibm}
              bg="#FDF0DC"
              w="150px"
            />
            <Card
              text="The caliber of their talents, the enthusiasm and commitment of their talent, and the velocity and the velocity of hiring are truly exceptional."
              avatar={nebula}
              bg="#FCE1E1"
              w="100px"
            />
              </SlickPanel>
        
        }
        txt={
          <PropText
            txt1="Brilliant minds"
            txt2="and"
            txt3="companies"
            txt4="come together to build the future"
            wid="670px"
          />
        }
      />
      <Future />
      <AnyTime
        txt1="Anytime, anywhere – with Andela, the future of work is here"
        txt2="Discover how leading companies have built impactful global teams with Andela"
        props="Discover how leading companies have built impactful global teams with Andela."
        props1="Stax Leverages Andela's engineers to scale product features and enhancements."
        props2="Wellthy Leverages Andela engineers to tackle short-term optimizations and long term upgrades."
        props3="Learn how companies like GitHub optimize a globally distributed engineering team with Andela, at Viva Tech 2022!"
        props4="How Pymetrics gained the flexibility to handle products development shifts with Andela."
        props5="How Percolate bypassed the competition and augumented team with Andela."
        props6="ProdPerfect Scaled to 35 'Ridiculously Talented' Engineers with Andela."
        hint="Case Studies"
      />
      <ScaleFaster
        txt1="Scale faster with Andela"
        txt2="What skills will drive your vision?"
      />
    </div>
  );
};

export default Andela;

const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
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
