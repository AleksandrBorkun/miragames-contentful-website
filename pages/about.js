import MetaHead from "components/MetaHead";
import { getEntries } from "contentful/client";
import { renderComponent } from "contentful/utils";

const About = ({ title, content, metaHead }) => {
  return (
    <>
      <MetaHead />
      {content?.map((component) => renderComponent(component))}
    </>
  );
};

export const getStaticProps = async () => {
  const results = await getEntries({
    content_type: "page",
    "fields.slug": "about-ob-game-dev",
  });

  console.log(results);
  const { content, metaHead = {} } = results.items[0].fields;
  return {
    props: { content, metaHead },
  };
};

export default About;
