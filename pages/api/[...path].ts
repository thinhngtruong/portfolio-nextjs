// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve) => {
    // Convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    if(accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }

    // Don't send cookie to API server
    req.headers.cookie = "";

    proxy.web(req, res, {
      target: "https://js-post-api.herokuapp.com",
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once("proxyRes", () => {
      resolve(true);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
