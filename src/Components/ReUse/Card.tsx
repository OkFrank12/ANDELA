import React from "react";
import styled from "styled-components";

interface iCard {
    name?: string;
    avatar?: string;
    country?: string;
    text?: string;
    bg?: string;
    brad?: string;
    h?: string;
    w?: string;
}


const Card: React.FC<iCard> = ({ name, avatar, country, text, bg, brad, w, h }) => {
  return (
    <div>
      <Container bg={`${bg}`}>
        <Div>
          <Avatar src={avatar} brad={`${brad}`} w={`${w}`} h={`${h}`}/>
          <Hold>
            <Name>{name}</Name>
            <Country>{country}</Country>
          </Hold>
        </Div>
        <Text>
          {text}
        </Text>
      </Container>
    </div>
  );
};

export default Card;

const Hold = styled.div`
  margin-left: 20px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const Country = styled.div`
  font-size: 14px;
`;

const Container = styled.div<{
    bg: string;
}>`
  width: 240px;
  padding: 15px;
  background-color: ${({bg}) => bg};
  border-radius: 10px;
  height: 250px;
  font-family: arial;

  margin: 20px;
`;

const Avatar = styled.img<{
    brad: string;
    w: string;
    h: string;
}>`
  border-radius: ${({brad}) => brad};
  height: ${({h}) => h};
  width: ${({w}) => w};
`;

const Text = styled.div`
  line-height: 1.5;
  font-size: 16px;
`;
