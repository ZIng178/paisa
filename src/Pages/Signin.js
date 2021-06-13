import React, { useState } from "react";
import Video from "../Videos/video.mp4";
import "./styles.css";
import { Button } from "../Components/ButtonElement";
import {
  HeroBg,
  HeroContentSignIn,
  VideoBg,
  HeroH1,
  HeroP,
  InputType,
  ArrowForward,
  ArrowRight,
} from "../Components/HeroSection/HeroElements";

const SigninPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="signin">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContentSignIn>
        <HeroH1> Virtual Banking Made Easy </HeroH1>
        <HeroP>
          Sign in to start managing your money the new way . Paisa allows you to
          take full control over your money without any hidden fees or services
          .
        </HeroP>
        <InputType>
          <input className="email" type="email" placeholder="email" />
          <input className="password" type="password" placeholder="password" />
          <button className="loginbutton"> Login</button>
        </InputType>
      </HeroContentSignIn>
    </div>
  );
};

export default SigninPage;
