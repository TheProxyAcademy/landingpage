import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_NAME = "The Proxy Academy";
const SITE_ORIGIN = "https://theproxyacademy.com";
const DEFAULT_IMAGE = `${SITE_ORIGIN}/social-share.jpg`;
const THEME_COLOR = "#059C02";

function absoluteUrl(pathname) {
  const path = pathname?.startsWith("/") ? pathname : `/${pathname || ""}`;
  return `${SITE_ORIGIN}${path === "/" ? "/" : path}`;
}

export default function Seo({
  title,
  description,
  image = DEFAULT_IMAGE,
  canonicalPath,
  noindex = false,
  type = "website",
}) {
  const { pathname } = useLocation();
  const canonical = canonicalPath ? absoluteUrl(canonicalPath) : absoluteUrl(pathname);
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Tech Classes for Kids & Teens`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="theme-color" content={THEME_COLOR} />
      {description ? <meta name="description" content={description} /> : null}

      <link rel="canonical" href={canonical} />

      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

