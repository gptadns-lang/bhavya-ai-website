import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bhavya AI Research Centre",
    short_name: "Bhavya AI",
    description: "Learn AI | Build Skills | Create Opportunities",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F3A",
    theme_color: "#0B1F3A",
    icons: [{ src: "/logo.png", sizes: "any", type: "image/png" }],
  };
}
