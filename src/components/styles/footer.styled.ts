import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }

  & > div > p {
    margin: 24px 0 0;
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 64px 0 32px;

    & > div > p {
      text-align: center;
    }
  }
`;

export const FooterContentStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
