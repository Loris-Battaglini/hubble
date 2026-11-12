import styled from "styled-components";

interface CardStyleProps {
  $reverse: boolean;
}

export const StyledCard = styled.section<CardStyleProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 32px;
    text-align: center;
  }
`;
