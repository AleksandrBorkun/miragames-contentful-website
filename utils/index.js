export const isExternalLink = (href = "") =>
  href.startsWith("http") && href.indexOf("miragamesstudio.com") === -1;
