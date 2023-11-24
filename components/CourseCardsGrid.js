import { PURPLE_MAIN } from "./const/colors";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { StarIcon } from "./Icons";
import MuiMarkdown from "mui-markdown";
import { getTranslation } from "translations";
import { markdownOverrides } from "./Paragraph";
import { useRef, useState } from "react";

const NextBtn = styled.a`
  font-size: 3rem;
  float: right;
  margin-top: 1rem;
  position: absolute;
  bottom: auto;
  right: 0;

  @media (min-width: 600px) {
    display: none;
  }
`;

const CoursesWrapper = styled.div`
  margin: 3.5rem 0;
  overflow: scroll;
  @media (min-width: 600px) {
    margin: 3.5rem 0;
  }
  @media (min-width: 1000px) {
    overflow: visible;
  }
`;
const CoursesHolder = styled.div`
  display: flex;
  gap: 0.75rem;
  min-width: 1200px;
  justify-content: flex-start;

  @media (min-width: 600px) {
    gap: 2.25rem;
    min-width: 1000px;
  }
  @media (min-width: 900px) {
    justify-content: center;
    width: auto;
  }
  @media (min-width: 1200px) {
    gap: 4rem;
  }
`;

const CardHolder = styled.div`
  background-color: rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 90vw;
  display: grid;
  grid-column: 1;
  grid-template-rows: 4fr 2fr 8fr 2fr 3fr 2fr;
  transition: .5s ease;


  @media (min-width: 600px){
    width: 18.125rem;
    grid-template-rows: 5fr 3fr 12fr 3fr 4fr 4fr;
  }

@media (min-width: 1200px){
  width: 20rem;
}

@media (min-width: 1200px){
  // width: 380px;
}


  &:hover{
  @media (min-width: 1000px) {

    ${({ angle }) =>
      angle < 3
        ? `
    transform: perspective(800px) rotateY(10deg) scale(1.1) rotateX(5deg);
    box-shadow: 0 0 0 2px ${PURPLE_MAIN},-40px 4px 16px -18px rgba(255,255,255,.09);
    `
        : `
        transform: perspective(800px) rotateY(-10deg) scale(1.1) rotateX(5deg);
        box-shadow: 0 0 0 2px ${PURPLE_MAIN},40px 4px 16px -18px rgba(255,255,255,.09);
        `}
  }
}
}
`;

const StarHolder = styled.div`
  padding-top: 32px;
  padding-bottom: 14px;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const Info = styled.div`
  background-color: #121212;

  ${({ withPadding }) =>
    withPadding &&
    `
  padding: 13px;
`}

  ul {
    margin: 0;
    margin-top: 2px;
  }
`;

const Disclaimer = styled.div`
  padding: 12px 13px;
`;

const CourseCard = ({
  title,
  subtitle,
  info,
  btnHref,
  discalimer,
  stars,
  refr,
}) => (
  <CardHolder angle={stars} ref={refr}>
    <StarHolder>
      {new Array(stars).fill(1).map((_, key) => (
        <StarIcon key={key} />
      ))}
    </StarHolder>

    <Typography component={"h3"} variant={"h3"} textAlign="center">
      {title}
    </Typography>
    <Typography component={"p"} variant={"body1"} padding={"13px"}>
      {subtitle}
    </Typography>
    <Info withPadding={!btnHref}>
      <MuiMarkdown>
        {btnHref ? info : getTranslation("course.unfinished")}
      </MuiMarkdown>
    </Info>
    <Button
      variant={btnHref ? "contained" : "text"}
      href={btnHref || "#sign-up-form"}
      size="large"
      sx={{ marginTop: 4 }}
      target={btnHref && "_blank"}
      color="info"
    >
      {btnHref ? getTranslation("course.buy") : getTranslation("course.notify")}
    </Button>
    <Disclaimer>
      <MuiMarkdown
        overrides={{
          a: { component: markdownOverrides.link },
        }}
      >
        {discalimer}
      </MuiMarkdown>
    </Disclaimer>
  </CardHolder>
);

export const CourseCardsGrid = ({ content, title }) => {
  const [currentActive, setCurrentActive] = useState(0);
  const cardsRefs = {
    0: useRef(),
    1: useRef(),
    2: useRef(),
    3: useRef(),
  };

  const handleNextClick = () => {
    const nextActive = currentActive + 1 > 2 ? 0 : currentActive + 1;
    console.log(cardsRefs[nextActive].current);
    setCurrentActive(nextActive);

    cardsRefs[nextActive].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
      <Typography
        component={"h2"}
        variant={"h2"}
        color={PURPLE_MAIN}
        maxWidth="1100px"
        sx={{
          margin: "auto",
        }}
      >
        {title}
      </Typography>
      <CoursesWrapper>
        <CoursesHolder>
          {content.map((course, key) => (
            <CourseCard refr={cardsRefs[key]} key={course.title} {...course} />
          ))}
        </CoursesHolder>
        <NextBtn type="button" onClick={handleNextClick}>
          &#8594;
        </NextBtn>
      </CoursesWrapper>
    </>
  );
};
