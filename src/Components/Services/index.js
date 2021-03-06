import React from "react";
import Icon1 from "../../Images/svg-1.svg";
import Icon2 from "../../Images/svg-2.svg";
import Icon3 from "../../Images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesCard,
  ServicesWrapper,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1> OurServices</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2> Reduce Exenses </ServicesH2>
            <ServicesP>
              We help you reduce your fees and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2> Virtual Offices </ServicesH2>
            <ServicesP>
              You can access our platform anywhere in the world .
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2> Premium Benefits </ServicesH2>
            <ServicesP>
              Unlock our special membership card and get a 5% discount
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
