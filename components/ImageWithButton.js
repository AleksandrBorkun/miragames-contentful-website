import { ImageConstructor } from "components/Image";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

const LabelTxt = styled(Typography)`
  color: #5c00f9;
  text-transform: uppercase;
`;

const ImageWithButton = ({
  label,
  title,
  description,
  image,
  buttonText,
  buttonLink,
  isReverse,
}) => (
  <Box
    height={"100%"}
    mt={2}
    pr={2}
    pl={2}
    sx={{
      display: "flex",
      flexDirection: {
        xs: "column",
        md: `${isReverse ? "row" : "row-reverse"}`,
      },
      alignItems: { xs: "center" },

      padding: { xs: "80px 2em", md: "96px 2em" },
    }}
  >
    <ImageConstructor
      {...image.fields}
      styles={`
      max-height : 450px;
      border-radius: 20px;
      margin-bottom: 20px;

      @media (min-width: 900px) {
        height: 100%;
        max-height: 600px;
        width: 50%;
      }
      `}
    />
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
        alignItems: { xs: "center", md: "flex-start" },
        padding: {
          xs: 0,
          md: `0 ${isReverse ? 0 : 2}em 0 ${isReverse ? 2 : 0}em`,
        },
      }}
    >
      <LabelTxt component={"h5"} variant="h5">
        {label}
      </LabelTxt>
      <Typography component={"h2"} variant="h3">
        {title}
      </Typography>
      <Typography component={"h4"} variant="h6" sx={{ marginTop: 2 }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        href={buttonLink}
        size="large"
        sx={{ marginTop: 4 }}
      >
        {buttonText}
      </Button>
    </Box>
  </Box>
);

export default ImageWithButton;
