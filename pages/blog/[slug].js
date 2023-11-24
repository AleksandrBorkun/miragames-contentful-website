import { Breadcrumbs, Divider, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { ImageConstructor } from "components/Image";
import MetaHead from "components/MetaHead";

import { getEntries } from "contentful/client";
import { renderComponent } from "contentful/utils";
import { SignUpForm } from "pages/about";
import { getTranslation } from "translations";

const BlogArticle = ({
  cover,
  title,
  description,
  date,
  content,
  metaHead = {},
  slug,
}) => {
  return (
    <>
      <MetaHead
        {...metaHead?.fields}
        metaUrl={`https://miragamesstudio.com/blog/${slug}`}
      />
      <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ImageConstructor
          isCover
          {...cover?.fields}
          styles={`max-height: 500px;
          object-position: top;`}
        />
        <Breadcrumbs
          mt={10}
          mb={5}
          separator="›"
          aria-label="breadcrumb"
          fontSize={"large"}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="text.primary" href="/blog">
            {getTranslation("blog")}
          </Link>
        </Breadcrumbs>
        {content?.map((component) => renderComponent(component))}
        <Divider variant="middle" />
      </Stack>
    </>
  );
};

export const getServerSideProps = async (props) => {
  const slug = props.query.slug;

  const articles = await getEntries({
    content_type: "blogArticle",
    "fields.slug": slug,
  });

  return {
    props: { ...articles.items[0]?.fields, slug },
  };
};

export default BlogArticle;
