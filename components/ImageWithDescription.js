import { Link } from "components/Link";

import { ImageConstructor } from "components/Image";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const AbsoluteTitle = styled.h3`
  position: absolute;
  color: white;
  bottom: 0em;
  padding: 0.3em 1em;
  padding-left: 1em;
  background-image: linear-gradient(45deg, #121212, transparent);
  border-top-right-radius: 1em;
`;

const ImageWithDescription = ({ title, link, image }) => (
  <Link
    href={link}
    styles={`
    border: 0.1em solid #272727;
    border-radius: 20px;
    overflow: hidden;
    transition: border .1s;
    &:hover{
        border: 0.1em solid white;
    }
    `}
  >
    <Box height={"100%"}>
      <ImageConstructor {...image.fields} isCover />
    </Box>
    <AbsoluteTitle>{title}</AbsoluteTitle>
  </Link>
);

export default ImageWithDescription;
