import React from "react";
import Hero from "./Home/Hero";
import Button from "../Components/Static/Button";
import ComingTogether from "./Home/ComingTogether";
import PropText from "../Components/ReUse/PropText";
import AndelaVideo from "./Custom/AndelaVideo";
import FindOut from "./Custom/FindOut";
import SparkThousand from "./Custom/SparkThousand";
import ScaleFaster from "./Home/ScaleFaster";
import Potential from "./Custom/Potential";
import Commitments from "./Custom/Commitments";
import AnyTime from "./Home/AnyTime";
import Brilliance from "./Custom/Brilliance";
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
import styled from "styled-components";

const AndelaExperts = () => {
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
        fs="70px"
        url="url(https://andela.com/wp-content/uploads/2022/03/green-wash.jpg)"
        txt="Find work that you love"
        w="680px"
        span="with companies you can trust"
        moretxt="Join the Andela Talent Network to experience the joy of long-term work, with vetted companies and competitive compensation."
        textWidth="560px"
        holder={
          <Button
            title="Apply to access exculsive jobs"
            bg="#56C870"
            w="280px"
            h="50px"
            sc="scale(1.09)"
          />
        }
      />
      <ComingTogether
        txt={
          <PropText
            txt2="We’re in the business of changing lives"
            wid="800px"
          />
        }
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
      />
      <AndelaVideo />
      <FindOut />
      <SparkThousand
        span="Spark"
        biggy="a thousand connections"
        small="Becoming part of a community has never been easier."
        btxt="Demonstrate your skills"
        btxt1="Personalized matching"
        btxt3="Unlock your potential"
        stxt="Join our expert community by completing a short assessment to showcase your skills."
        stxt2="You’ve done the work to build your experience and knowledge. Now we’ll find your dream role through enhancing your profile, career coaching, and introducing you to the world’s most innovative companies."
        stxt4="Once you land your perfect role, Andela is here to support you to hone your craft and achieve your goals."
        w="300px"
        sw="300px"
        url="url(https://andela.com/wp-content/uploads/2022/03/shutterstock_1241581108.jpg)"
        h="400px"
        btn={
          <Button
            title="Get Started"
            w="120px"
            h="50px"
            bg="#56C870"
            sc="scale(1.09)"
          />
        }
      />
      <ScaleFaster
        txt3="Your skills are in demand"
        txt4="The future is yours to create."
        btn={
          <Button
            title="Apply to the Andela Talent Network"
            bor="1px solid black"
            h="50px"
            sc="scale(1.09)"
          />
        }
      />
      <Potential />
      <Commitments />
      <AnyTime
        txt1="Insights to inspire"
        txt2="The latest articles from Andela."
        props="The Ultimate guide to NumPy for Machine Learning."
        props1="Embracing change: A personal journey of career transition and growth."
        props2="How AI is solving the biggest design challenge."
        props3="Personal Branding For Technology Professional"
        props4="How to create, attach, and detach IAM Roles in AWS."
        props5="Using Loki for logging"
        props6="Talent Wins Games; Teamwork Wins Championships."
        hint="Insights"
      />
      <Brilliance />
    </div>
  );
};

export default AndelaExperts;

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
