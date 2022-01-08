import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axiosClient from "@/api/axios-client";
import { AppPropsWithLayout } from '@/models/common'
import { EmptyLayout } from '@/components/layout'

import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
