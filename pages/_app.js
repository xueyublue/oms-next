import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Layout } from "antd";
import "antd/dist/antd.css";

import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "./index.css";
import AppBar from "../components/AppBar";
import AppFooter from "../components/AppFooter";

const { Content } = Layout;

function MyApp({ Component, pageProps }) {
  const [pageWithoutNavigation, setPageWithoutNavigation] = useState(false);
  const { asPath } = useRouter();
  if (asPath === "/login" && !pageWithoutNavigation)
    setPageWithoutNavigation(true);
  if (asPath !== "/login" && pageWithoutNavigation)
    setPageWithoutNavigation(false);

  if (pageWithoutNavigation)
    return (
      <Layout>
        <Layout className="site-layout" style={{ minHeight: "100vh" }}>
          <Content className="site-layout-background" style={{ padding: 8 }}>
            <Component {...pageProps} />
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    );
  return (
    <Layout>
      <NavBar />
      <Layout
        className="site-layout"
        style={{ marginLeft: 220, minHeight: "100vh" }}
      >
        <AppBar />
        <Content
          className="site-layout-background"
          style={{
            margin: "8px 8px",
            padding: 8,
            minHeight: 650,
          }}
        >
          <Component {...pageProps} />
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default MyApp;
