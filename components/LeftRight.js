import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { renderComponent } from "contentful/utils";

const LeftRightImage = styled.img`
  max-width: 100%;
`;

export const LeftRight = ({ left, right, image }) => (
  <Box
    sx={{
      display: { md: "grid", xs: "flex" },
      flexDirection: "column",
      gridTemplateColumns: "1fr 1fr",
      gap: 2,
      marginTop: 4,
      alignItems: "center",
    }}
  >
    {left ? renderComponent(left) : ""}
    <LeftRightImage
      src={`https:${image.fields.file.url}?q=80&w=800&fm=webp`}
      alt={image.fields.description}
    />
    {right ? renderComponent(right) : ""}
  </Box>
);

export default LeftRight;
