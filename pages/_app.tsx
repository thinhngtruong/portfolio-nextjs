import axiosClient from "@/api/axios-client";
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import 'antd/dist/antd.css';
import { SWRConfig } from "swr";
import "@/styles/globals.css";

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
