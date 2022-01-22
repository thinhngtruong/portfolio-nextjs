import axiosClient from "@/api/axios-client";
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import { SWRConfig } from "swr";
import { AppProvider } from '@/components/context'
import 'antd/dist/antd.css';
import "@/styles/globals.css";
import "@/styles/common.scss"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </AppProvider>
    </SWRConfig>
  );
}

export default MyApp;
