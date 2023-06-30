import React from "react";
import styled from "styled-components";
import num from "../../Assets/Group 1 (2).svg";


interface iSpark {
  btxt?: string;
  sw?: string;
  stxt?: string;
  biggy?: string;
  small?: string;
  btn?: any;
  span?: string;
  w?: string;
  btxt1?: string;
  url?: string;
  btxt3?: string;
  h?: string;
  stxt2?: string;
  stxt4?: string;
}

const SparkThousand: React.FC<iSpark> = ({
  btn,
  btxt,
  btxt1,
  btxt3,
  stxt2,
  sw,
  stxt4,
  url,
  small,
  stxt,
  w,
  biggy,
  h,
  span,
}) => {
  const data: any = [
    {
      btxt: btxt,
      stxt: stxt,
    },
    {
      btxt: btxt1,
      stxt: stxt2,
    },
    {
      btxt: btxt3,
      stxt: stxt4,
    },
  ];
  return (
    <div>
      <Container url={`${url}`}>
        <Cover>
          <Main>
            <LeftSider>
              <BigText w={`${w}`}>
                <span>{span}</span> {biggy}
              </BigText>
              <br />
              <SmallText w={`${sw}`} fw="" mg="">
                {small}
              </SmallText>
              <br />
             {btn}
            </LeftSider>
            <RightSider>
              <Image src={num} h={`${h}`}/>
              <TextPanel>
                {data.map((el: any) => (
                  <Div>
                    <SmallText w="" fw="bold" mg="15px">
                      {el.btxt}
                    </SmallText>
                    <SmallText w="600px" fw="" mg="">
                      {el.stxt}
                    </SmallText>
                  </Div>
                ))}
              </TextPanel>
            </RightSider>
          </Main>
        </Cover>
      </Container>
    </div>
  );
};

export default SparkThousand;

const Div = styled.div`
  margin: 30px 0;
`;

const RightSider = styled.div`
  width: 50%;
  display: flex;
`;

const Image = styled.img<{
  h: string;
}>`
  height: ${({h}) => h};
  margin-top: 20px;
`;

const TextPanel = styled.div`
  margin-left: 25px;
`;

const Container = styled.div<{
  url?: string;
}>`
  height: 80vh;
  background-image: ${({url}) => url};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 95%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const LeftSider = styled.div``;

const BigText = styled.div<{
  w: string;
}>`
  width: ${({w}) => w};
  font-size: 60px;
  font-weight: 500;

  span {
    font-style: italic;
  }
`;

const SmallText = styled.div<{
  w: string;
  fw: string;
  mg: string;
}>`
  font-size: 20px;
  margin-bottom: ${({ mg }) => mg};
  width: ${({ w }) => w};
  font-family: arial;
  font-weight: ${({ fw }) => fw};
`;

const Cover = styled.div`
  background-color: rgba(26, 55, 51, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
