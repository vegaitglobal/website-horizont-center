// next config
import getConfig from "next/config";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();

// Passed the ENV variables as constants
export const ENV = {
  /* server and client */
  BASE_URL: publicRuntimeConfig.baseUrl,
  BASE_API_URL: publicRuntimeConfig.baseApiUrl,
  /* default seo */
  BASE_SEO: publicRuntimeConfig.baseSeo,
  /* website global */
  NAME: publicRuntimeConfig.name,
  TITLE: publicRuntimeConfig.title,
  SLOGAN: publicRuntimeConfig.slogan,
  DESCRIPTION: publicRuntimeConfig.description,
  AUTHOR: publicRuntimeConfig.author,
  STATIC_DIR: publicRuntimeConfig.staticFolder,
  LOGO: publicRuntimeConfig.image,
  IMAGE_SHARE: publicRuntimeConfig.imageShare,
  FACEBOOK_URL: publicRuntimeConfig.facebookUrl,
  YOUTUBE_URL: publicRuntimeConfig.youtubeUrl,
  INSTAGRAM_URL: publicRuntimeConfig.instagramUrl,
  PHONE: publicRuntimeConfig.phone,
  ADDRESS: publicRuntimeConfig.address,
  COUNTRY: publicRuntimeConfig.country,
  REGION: publicRuntimeConfig.region,
  POSTAL_CODE: publicRuntimeConfig.postalCode,
  LOCALE: publicRuntimeConfig.locale,
};
