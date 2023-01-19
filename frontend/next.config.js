module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    // Pass through env variables
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.API_URL,
    staticFolder: process.env.STATIC_DIR,
    // Will be used for per SEO page default
    baseSeo: {
      robotsProps: {
        maxSnippet: -1,
        maxImagePreview: "none",
        maxVideoPreview: -1,
      },
    },
    name: "Negovatelji - Zajednica brižnih",
    title: "Negovatelji u Srbiji",
    slogan: "Negujmo one koji su i nas nekada negovali",
    description:
      "Negovatelji.rs je platforma za povezivanje, osnaživanje i podršku svima koji neguju bližnje, nemoćne, zavisne osobe… za sve kojima je potrebna pomoć za kućnu negu bolesnika, dece, supružnika, roditelja, prijatelja…",
    author: process.env.AUTHOR,
    logo: `images/logo.svg`,
    imageShare: `images/static.2.jpg`,
    facebookUrl: "https://www.facebook.com/groups/270285275225942/",
    instagramUrl: "https://instagram.com/negovatelji?igshid=MWI4MTIyMDE=",
    youtubeUrl: "https://www.youtube.com/channel/UCS5gh6FEudKxWeUPIzL_Kog",
    phone: "+381000000000", // TODO
    address: "Novi Sad",
    region: "Vojvodina",
    country: "RS",
    postalCode: "21000",
    locale: "sr",
  },
};
