import { useEffect } from "react";

const DEFAULT_TITLE =
  "Estimere | Freelance Construction Estimating & Bid Writing — Civils, Utilities & MEPH";
const DEFAULT_DESCRIPTION =
  "Independent construction estimating and bid writing for UK contractors. Senior expertise in civils, utilities, MEPH and principal contractor works.";
const SITE_URL = "https://estimere.co.uk";

function setMeta(selector, attr, value) {
  if (!value) return null;
  let el = document.head.querySelector(selector);
  let created = false;
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[(\w+)="([^"]+)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
    created = true;
  }
  const previous = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return { el, previous, created };
}

/**
 * Sets per-page document title, meta description, canonical URL and OG tags.
 * Necessary because this is a client-rendered SPA — index.html only provides defaults.
 *
 * @param {object} options
 * @param {string} options.title      Full page title
 * @param {string} options.description Meta description
 * @param {string} options.path        Path for canonical URL, e.g. "/services/bid-writing"
 * @param {object} options.jsonLd      Optional structured data object
 */
export default function useSEO({ title, description, path, jsonLd } = {}) {
  useEffect(() => {
    const finalTitle = title || DEFAULT_TITLE;
    const finalDescription = description || DEFAULT_DESCRIPTION;
    const canonical = path ? `${SITE_URL}${path}` : SITE_URL;

    const previousTitle = document.title;
    document.title = finalTitle;

    const changes = [
      setMeta('meta[name="description"]', "content", finalDescription),
      setMeta('meta[property="og:title"]', "content", finalTitle),
      setMeta('meta[property="og:description"]', "content", finalDescription),
      setMeta('meta[property="og:url"]', "content", canonical),
      setMeta('meta[name="twitter:title"]', "content", finalTitle),
      setMeta('meta[name="twitter:description"]', "content", finalDescription),
    ].filter(Boolean);

    // Canonical link
    let canonicalEl = document.head.querySelector('link[rel="canonical"]');
    let canonicalCreated = false;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
      canonicalCreated = true;
    }
    const previousCanonical = canonicalEl.getAttribute("href");
    canonicalEl.setAttribute("href", canonical);

    // Structured data
    let jsonLdEl = null;
    if (jsonLd) {
      jsonLdEl = document.createElement("script");
      jsonLdEl.type = "application/ld+json";
      jsonLdEl.dataset.dynamic = "true";
      jsonLdEl.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdEl);
    }

    return () => {
      document.title = previousTitle;
      changes.forEach(({ el, previous, created }) => {
        if (created) el.remove();
        else if (previous !== null) el.setAttribute("content", previous);
      });
      if (canonicalCreated) canonicalEl.remove();
      else if (previousCanonical) canonicalEl.setAttribute("href", previousCanonical);
      if (jsonLdEl) jsonLdEl.remove();
    };
  }, [title, description, path, jsonLd]);
}
