import React from "react";
import styled from "styled-components";
import Ima from "../../Assets/andela-commmunity-video-profile-play-1024x576.jpg";
import { MdCancel } from "react-icons/md";

const AndelaVideo = () => {
  const [Toggle, setToggle] = React.useState<boolean>(false);

  const onToggle = () => {
    setToggle(!Toggle);
  };
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <Txt>
              Our <span>vibrant</span> community
            </Txt>
            <SmallText>
              Rizwan Jafri shares his Andela story from Lahore, Pakistan.
            </SmallText>
          </Top>
          <Image src={Ima} onClick={onToggle} />
        </Main>
        {Toggle ? (
          <Div>
            <VideoCover onClick={onToggle}>
              <Icon size={30} onClick={onToggle}/>
            </VideoCover>
            <VideoScreen
              src="https://player.vimeo.com/external/422530321.sd.mp4?s=4430ea80e542802066e8fcf6724aa1d508dc5d13&profile_id=164&oauth2_token_id=57447761"
              controls
              playsInline
              autoPlay
            />
          </Div>
        ) : null}
      </Container>
    </div>
  );
};

export default AndelaVideo;

const Icon = styled(MdCancel)`
  background-color: black;
  transition: all 350ms;
  cursor: pointer;
  padding: 10px;

  :hover{
    transform: scale(1.02);
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 300;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoCover = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: flex-end;
`;

const VideoScreen = styled.video`
  width: 800px;
  height: 500px;
  position: absolute;
`;

const Image = styled.img`
  width: 800px;
`;

const Top = styled.div`
  text-align: center;
`;

const Txt = styled.div`
  font-size: 45px;

  span {
    font-style: italic;
  }
`;

const SmallText = styled.div`
  font-size: 20px;
  font-family: arial;
  margin: 20px 0;
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #173b3f;
  color: white;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
