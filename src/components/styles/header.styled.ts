import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* Prende il colore direttamente dal ThemeProvider centrale in automatico */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  h1 {
    font-size: 2.5rem;
    margin: 0 0 1rem;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    button {
      padding: 12px 32px;
    }
  }
`;

export const LogoStyled = styled.img``;

export const HeroContentStyled = styled.div`
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
  }

  p {
    margin: 0 0 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroImageStyled = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin: 40px 0 30px;
  }
`;
