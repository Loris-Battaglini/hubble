import logo from "../assets/images/logo_white.svg";
import { ContainerStyled } from "./styles/container.styled";
import { FooterContentStyled, FooterStyled } from "./styles/footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <FooterStyled>
      <ContainerStyled>
        <img src={logo} alt="Huddle" />
        <FooterContentStyled>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </FooterContentStyled>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </ContainerStyled>
    </FooterStyled>
  );
}
