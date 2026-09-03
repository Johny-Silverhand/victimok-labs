export default function sitemap() {
  const base = "https://victimok-labs.vercel.app";
  const lastModified = new Date();

  return [
    { url: base, lastModified },
    { url: `${base}/services`, lastModified },
    { url: `${base}/shop`, lastModified },
    { url: `${base}/login`, lastModified },
    { url: `${base}/register`, lastModified },
  ];
}
