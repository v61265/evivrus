import styled from "styled-components";
import Title from "./Title";
import PlanCard from "./ApcsPlanCard";
import yellowStar from "../asstes/star-yellow.svg";
import redStar from "../asstes/star-red.svg";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
  max-width: 1120px;
  margin: 0 auto;
`;

const BackCircle = styled.div`
  width: 1200px;
  height: 1200px;
  background: #fff;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  transform: translate(-25vw, -40px);
`;

const Hint = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #000000;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  ${({ theme }) => theme.media.md} {
    font-size: 36px;
    line-height: 47px;
    font-weight: 400;
    margin-top: 86px;
  }
`;

const YellowStar = styled.img`
  transform: translate(0, 80px);
`;

const Charging = styled.div`
  border: 10px solid #cad5d7;
  border-radius: 130px;
  padding: 20px;
  margin-top: 24px;
  ${({ theme }) => theme.media.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    padding: 52px;
  }
`;

const ChargingTitle = styled.span`
  border-bottom: 7px solid #cad5d7;
  padding-bottom: 4px;
  font-size: 20px;
  line-height: 26px;
  color: #545454;
  ${({ theme }) => theme.media.md} {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 17px;
  }
`;

const ChargingBottom = styled.div`
  margin-top: 12px;
`;

const ChargingPrize = styled.span`
  font-weight: 700;
  font-size: 36px;
  color: #ffa8a1;
  ${({ theme }) => theme.media.md} {
    font-size: 68px;
    line-height: 88px;
  }
`;

const ChargingUnit = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #545454;
  ${({ theme }) => theme.media.md} {
    display: block;
    font-size: 32px;
    line-height: 42px;
    margin-top: 40px;
  }
`;

const PlanCards = styled.div`
  margin-top: 24px;
  ${({ theme }) => theme.media.md} {
    margin-top: 0;
  }
`;

const PlanAndCharge = styled.div`
  ${({ theme }) => theme.media.md} {
    display: flex;
    margin: 0 auto;
    margin-top: 64px;
  }
`;

export default function Plan({ plans, hint, charging }) {
  return (
    <Wrapper id='plan'>
      <Title title='課程方案' isLight={false} />
      <PlanAndCharge>
        <div>
          <PlanCards>
            {plans.map((plan, i) => {
              return <PlanCard key={i} plan={plan} />;
            })}
          </PlanCards>
        </div>
        <Charging>
          <ChargingTitle>收費方式</ChargingTitle>
          <ChargingBottom>
            <ChargingPrize>{charging[0]}</ChargingPrize>
            <ChargingUnit>{charging[1]}</ChargingUnit>
          </ChargingBottom>
        </Charging>
      </PlanAndCharge>
      <Hint>
        <img src={redStar} alt='red-star' />
        {hint}
        <YellowStar src={yellowStar} alt='yellow-star' />
      </Hint>
    </Wrapper>
  );
}
