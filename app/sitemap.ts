import type { MetadataRoute } from "next";
import { absoluteUrl, languageAlternates, LAST_MODIFIED, LEGAL_LAST_MODIFIED, legalPaths, localizedPath, sitemapRoutes } from "@/lib/seo";
import { locales } from "@/lib/i18n";
import { listPublishedArticles } from "@/lib/research-store";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = sitemapRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizedPath(route.path, locale)),
      lastModified: legalPaths.includes(route.path) ? LEGAL_LAST_MODIFIED : LAST_MODIFIED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: languageAlternates(route.path)
      }
    }))
  );

  const articles = await listPublishedArticles();
  const articleRoutes = articles.flatMap((article) => [
    {
      url: absoluteUrl(`/research/${article.slug}`),
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: absoluteUrl(`/research/${article.slug}`),
          ru: absoluteUrl(`/ru/research/${article.slug}`)
        }
      }
    },
    {
      url: absoluteUrl(`/ru/research/${article.slug}`),
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: absoluteUrl(`/research/${article.slug}`),
          ru: absoluteUrl(`/ru/research/${article.slug}`)
        }
      }
    }
  ]);

  return [...staticRoutes, ...articleRoutes];
}
