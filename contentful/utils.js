import dynamic from "next/dynamic";

export const renderComponent = ({ sys, fields }) => {
  const elementID = sys.contentType.sys.id;
  switch (elementID) {
    case "twoColumnGrid": {
      const TwoColumnGrid = dynamic(() => import("components/TwoColumnGrid"));
      return <TwoColumnGrid key={sys.id} {...fields} />;
    }
    case "imageWithButton": {
      const ImageWithButton = dynamic(() =>
        import("components/ImageWithButton")
      );
      return <ImageWithButton key={sys.id} {...fields} />;
    }
    case "imageWithDescription": {
      const ImageWithDescription = dynamic(() =>
        import("components/ImageWithDescription")
      );
      return <ImageWithDescription key={sys.id} {...fields} />;
    }
    case "column": {
      const Column = dynamic(() => import("components/Column"));
      return <Column key={sys.id} {...fields} />;
    }
    case "paragraph": {
      const Paragraph = dynamic(() => import("components/Paragraph"));
      return <Paragraph key={sys.id} {...fields} />;
    }
    case "videoBlock": {
      const VideoBlock = dynamic(() => import("components/VideoBlock"));
      return <VideoBlock key={sys.id} {...fields} />;
    }
    case "leftRight": {
      const LeftRight = dynamic(() => import("components/LeftRight"));
      return <LeftRight key={sys.id} {...fields} />;
    }
    default: {
      return <span>element with ID "{elementID}" wasn't found</span>;
    }
  }
};
