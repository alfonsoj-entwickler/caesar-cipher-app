import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Caesar Cipher App - Online Text Encryption & Decryption",
    short_name: "Caesar Cipher",
    description:
      "Free online Caesar cipher encoder and decoder. Encrypt and decrypt messages instantly using the classic Caesar rotation cipher with customizable shift offsets.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
