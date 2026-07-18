export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;

  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  noIndex?: boolean;
}