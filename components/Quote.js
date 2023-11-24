import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { PURPLE_MAIN } from "./const/colors";

const QuoteWrapper = styled.div`
  display: flex;
  margin: 3rem auto;
  margin-top: 4rem;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  padding: 60px 12px 12px 12px;
  position: relative;
  transition: 0.4s ease;

  flex-direction: column;

  &::before {
    content: "\\201D";
    font-family: Arial;
    color: ${PURPLE_MAIN};
    font-size: 8rem;
    position: absolute;
    right: 0;
    top: -3.8rem;
  }

  &::after {
    content: "";
    display: block;
    width: 80%;
    position: absolute;
    height: 2rem;
    background: rgba(255, 255, 255, 0.05);
    bottom: -50px;
    filter: blur(18px);
    border-radius: 50%;
    left: calc(50%);
    transform: translate(-50%);
    transition: 0.4s ease;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    max-width: 1000px;
    margin-bottom: 5rem;
    padding: 12px 36px;
  }

  @media (min-width: 1000px) {
    &:hover {
      &::after {
        width: 50%;
        height: 1.5rem;
      }
      transform: translateY(-20px);
    }
  }
`;

const QuoteImageWraper = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    top: -40px;
    left: 0;
  }
`;
const QuoteImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

export const Quote = ({ src, txt, author = "Unknown Author" }) => {
  return (
    <QuoteWrapper>
      <QuoteImageWraper>
        <QuoteImage src={src} alt={author} title="author" />
      </QuoteImageWraper>

      <Typography component={"p"} variant="p">
        {txt}
      </Typography>
    </QuoteWrapper>
  );
};
