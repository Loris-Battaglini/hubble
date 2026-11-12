import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/social-icons.styled";

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", Icon: FaTwitter },
  { name: "Facebook", url: "https://facebook.com", Icon: FaFacebookF },
  { name: "LinkedIn", url: "https://linkedin.com", Icon: FaLinkedinIn },
];

export default function SocialIcons() {
  return (
    <StyledSocialIcons aria-label="Social media">
      {socialLinks.map(({ name, url, Icon }) => (
        <li key={name}>
          <a href={url} aria-label={name}>
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </StyledSocialIcons>
  );
}
