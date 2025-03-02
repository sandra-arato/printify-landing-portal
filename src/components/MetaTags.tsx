import { Helmet } from "react-helmet-async";
import ceramic from "../assets/ceramic.avif";

interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
}

const MetaTags = ({ title, description, path }: MetaTagsProps) => {
  const siteUrl = "https://vinylgrafik.hu";
  const fullUrl = `${siteUrl}${path}`;
  return (
    <Helmet>
      <title>{title} | Vinyl Grafik Stúdió</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ceramic}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ceramic}`} />

      {/* Additional SEO tags */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default MetaTags; 