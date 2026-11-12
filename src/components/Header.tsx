import {
  HeaderStyled,
  HeroContentStyled,
  HeroImageStyled,
  LogoStyled,
  NavStyled,
} from "./styles/header.styled";
import { ContainerStyled } from "./styles/container.styled";
import { ButtonStyled } from "./styles/button.styled";
import logo from "../assets/images/logo.svg";
import mockups from "../assets/images/illustration-mockups.svg";

export default function Header() {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <NavStyled>
          <LogoStyled src={logo} alt="Hubble Logo" />
          <ButtonStyled>Try It Free</ButtonStyled>
        </NavStyled>
        <HeroContentStyled>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <ButtonStyled $bg="#ff0099" $color="#fff">
              Get Started For Free
            </ButtonStyled>
          </div>
          <HeroImageStyled src={mockups} alt="Huddle app shown on devices" />
        </HeroContentStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
}
