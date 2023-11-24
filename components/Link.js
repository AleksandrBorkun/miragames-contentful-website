import NextLink from "next/link";
import { styled } from "@mui/material/styles";

const StyledLink = styled('a')`
    position: relative;
    text-decoration: none;
    ${({styles})=>styles&&`${styles}`}
`;


export const Link = ({ href, text, children, styles }) => (
  <NextLink href={href} passHref>
    <StyledLink styles={styles}>
      {text}
      {children}
    </StyledLink>
  </NextLink>
);
