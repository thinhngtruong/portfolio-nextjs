import axiosClient from "@/api/axios-client";
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import { SWRConfig } from "swr";
import { ThemeProvider } from '@/components/context'
import 'antd/dist/antd.css';
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
      <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
