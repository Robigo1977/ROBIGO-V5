import { Helmet } from "react-helmet-async";
import type { SEOConfig } from "./seoTypes";

interface SEOProps {
  config: SEOConfig;
  schema?: object | object[];
}

export default function SEO({ config, schema }: SEOProps) {
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{config.title}</title>

      <meta
        name="description"
        content={config.description}
      />

      <link
        rel="canonical"
        href={config.canonical}
      />

      <meta
        property="og:title"
        content={config.ogTitle ?? config.title}
      />

      <meta
        property="og:description"
        content={config.ogDescription ?? config.description}
      />

      {config.ogImage && (
        <meta
          property="og:image"
          content={config.ogImage}
        />
      )}

      <meta
        name="twitter:title"
        content={config.twitterTitle ?? config.title}
      />

      <meta
        name="twitter:description"
        content={config.twitterDescription ?? config.description}
      />

      {config.twitterImage && (
        <meta
          name="twitter:image"
          content={config.twitterImage}
        />
      )}

      {config.noIndex && (
        <meta
          name="robots"
          content="noindex,nofollow"
        />
      )}

      {schemas.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
        >
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}