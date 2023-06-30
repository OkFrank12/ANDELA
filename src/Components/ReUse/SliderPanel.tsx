import React from 'react'
import Card from './Card'
import avatar from "../../Assets/Adetola-Ahmed-talent-profile-150x150.jpg";
import logic from "../../Assets/Logitech-Logo-2015-present-copy-1024x576.png";
import branch from "../../Assets/branch-logo-kale-1.png";
import avatar1 from "../../Assets/Adeyinka-Alabi-2-Talent-homepage-150x150.jpg";
import avatar2 from "../../Assets/Rafael-Henrique-talent-profile-150x150.jpg";
import fulk from "../../Assets/Fluxx-logo-google-apps-copy.png";
import attune from "../../Assets/attune-1024x343.png";
import goruf from "../../Assets/gopuff.png";
import user from "../../Assets/user.png"
import ibm from "../../Assets/ibm.png.webp";
import nebula from "../../Assets/Nebula-color-stacked-kale.png";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SliderPanel extends React.Component{
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 4,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      vertical: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
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
                text='Andela is a relatively new partner for us; However, they have quickly become one of our top suppliers and are able to turn-around talents.' 
                avatar={ibm}
                bg="#FDF0DC"
                w="150px"
                />
                <Card
                text='The caliber of their talents, the enthusiasm and commitment of their talent, and the velocity and the velocity of hiring are truly exceptional.' 
                avatar={nebula}
                bg="#FCE1E1"
                w="100px"
                />
                </div>
        </Slider>
      </div>
    )
  }
  }

