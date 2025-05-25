import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    domains: ['ik.imagekit.io'],
  },
  /* config options here */
  //marbot be cache karadan data ha ast vali hanoz in option nahaii nashode 
  // experimental:{
  //   staleTimes:{
  //     dynamic:30
  //   }
  // }

};

export default nextConfig;
