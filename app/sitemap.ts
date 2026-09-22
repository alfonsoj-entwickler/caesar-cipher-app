import { MetadataRoute } from 'next';
import { SITE_URL } from '@/helpers/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
  ];
}

