import { Stack, Box, Typography, Grid } from "@mui/material";
import Card from "components/Card";
import { getEntries } from "contentful/client";
import { getTranslation } from "translations";

const Blog = ({ articles }) => {
  return (
    <Stack>
      <Box
        height={"300px"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "divider",
          mt: 2,
        }}
      >
        <Typography
          textAlign={"center"}
          margin={"auto 0"}
          component={"h1"}
          variant={"h1"}
        >
          {getTranslation("blog")}
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        mt={4}
        sx={{
          display: { md: "grid" },
          gridTemplateColumns: { md: "repeat(4, 1fr)" },
          justifyContent: { xs: "center" },
        }}
      >
        {articles.map(({ fields: { slug, content, cover, ...props } }, key) => (
          <Grid key={key} item>
            <Card href={`/blog/${slug}`} {...props} image={cover.fields} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export const getStaticProps = async () => {
  const articles = (
    await getEntries({
      content_type: "blogArticle",
      "fields.type": "gameBlog",
    })
  ).items;
  return {
    props: { articles },
  };
};

export default Blog;
