import { Stack, Box, Typography } from "@mui/material";
import { renderComponent } from "contentful/utils";
import { getTranslation } from "translations";

const Column = ({ content, isHorizontal, title }) => {
  const Wrapper = isHorizontal ? Box : Stack;
  return (
    <>
      {isHorizontal && title ? (
        <Typography component={"h2"} variant={"h3"} mt={4}>
          {getTranslation(title.toLowerCase().trim().replace(/ /g, "-"))}
        </Typography>
      ) : (
        ""
      )}
      <Wrapper
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={
          isHorizontal
            ? {
                display: { md: "grid", xs: "flex" },
                flexDirection: { xs: "column" },
                gridTemplateColumns: { md: "repeat(3, 1fr)" },
                columnGap: { md: 2 },
                mt: { md: 4, xs: 2 },
              }
            : {}
        }
      >
        {content.map((component) => renderComponent(component))}
      </Wrapper>
    </>
  );
};

export default Column;
