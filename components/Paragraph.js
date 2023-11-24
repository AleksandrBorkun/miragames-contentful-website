import { Box, Link as MuiLink, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import { ImageConstructor } from "components/Image";
import Link from "next/link";
import { isExternalLink } from "utils";

export const markdownOverrides = {
  h2: (params) => (
    <Typography component={"h2"} variant="h3" {...params} mb={5} mt={5} />
  ),
  h3: (params) => (
    <Typography component={"h3"} variant="h6" {...params} mb={5} mt={5} />
  ),
  p: (params) => (
    <Typography component={"p"} variant="body1" {...params} mb={2} mt={2} />
  ),
  img: (params) => (
    <Box textAlign={"center"}>
      <ImageConstructor {...params} />
    </Box>
  ),
  link: ({ href, ...params }) =>
    isExternalLink(href) ? (
      <MuiLink href={href} target="_blank" {...params} />
    ) : (
      <Link href={href} passHref>
        <MuiLink {...params} />
      </Link>
    ),
};
const Paragraph = ({ title, content }) => (
  <Box sx={{ padding: { md: "0 200px", xs: 0 } }}>
    {title && (
      <Typography component={"h1"} variant="h2" mb={5} textAlign={"center"}>
        {title}
      </Typography>
    )}
    {/* override headers */}
    <MuiMarkdown
      overrides={{
        img: { component: markdownOverrides.img },
        h2: { component: markdownOverrides.h2 },
        p: { component: markdownOverrides.p },
        a: { component: markdownOverrides.link },
      }}
    >
      {content}
    </MuiMarkdown>
  </Box>
);

export default Paragraph;
