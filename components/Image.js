import styled from "@emotion/styled";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  ${({ isCover }) =>
    isCover &&
    `
    height: 100%;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  `}
  ${({ styles }) =>
    styles &&
    `
    ${styles}
  `}
`;

export const ImageConstructor = ({
  title,
  description,
  file,
  isCover = false,
  styles,
  src,
  alt,
}) => {
  const url = src || file?.url;
  const desc = alt || description || title;
  const query = url?.split("?")[1] ? "" : "?fm=webp&q=80&w=1200";
  return (
    <Image
      styles={styles}
      isCover={isCover}
      src={url?.indexOf("//") === 0 ? `https:${url}${query}` : url}
      atl={desc}
    />
  );
};
