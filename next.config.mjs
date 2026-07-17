/** @type {import('next').NextConfig} */
const nextConfig = {
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
