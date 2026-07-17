/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      {
        source: "/eventos",
        destination: "/novedades?seccion=agenda",
        permanent: true
      },
      {
        source: "/oportunidades",
        destination: "/novedades?seccion=oportunidades",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
