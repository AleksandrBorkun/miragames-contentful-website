const { default: Head } = require("next/head");

const MetaHead = ({
  metaTitle,
  metaDescription,
  metaUrl,
  metaImage,
  metaKeywords,
  metaImgAlt,
  type,
}) => (
  <Head>
    {/* Open Graph tags  */}

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    {metaTitle && (
      <>
        <meta property="og:title" content={metaTitle} />
        <title>{metaTitle}</title>
      </>
    )}
    {metaUrl && <link rel="canonical" href={metaUrl} />}
    {metaDescription && (
      <>
        <meta property="og:description" content={metaDescription} />
        <meta name="description" content={metaDescription} />
      </>
    )}
    <meta property="og:type" content={type || "website"} />
    <meta property="og:site_name" content="OB Game Dev" />
    <meta
      property="og:url"
      content={metaUrl || "https://miragamesstudio.com"}
    />
    {metaImage ? <meta property="og:image" content={metaImage} /> : ""}
    {metaImgAlt ? <meta property="og:image:alt" content={metaImgAlt} /> : ""}
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
    {metaKeywords && <meta name="keywords" content={metaKeywords} />}
  </Head>
);

export default MetaHead;
