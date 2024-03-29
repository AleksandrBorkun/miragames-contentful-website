import MetaHead from "components/MetaHead";
import { getEntries } from "contentful/client";
import { renderComponent } from "contentful/utils";

const Page = ({ title, content, metaHead }) => {
  return (
    <>
      <MetaHead />
      {content?.map((component) => renderComponent(component))}
    </>
  );
};

export const getServerSideProps = async (props) => {
  const articles = await getEntries({
    content_type: "page",
    "fields.slug": "ob-game-dev",
  });

  const { content, metaHead = {} } = articles.items[0].fields;
  return {
    props: { content, metaHead },
  };
};

export default Page;
