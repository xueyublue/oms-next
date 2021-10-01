import { Layout } from "antd";

import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "antd/dist/antd.css";
import "./index.css";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  const [pageWithoutNavigation, setPageWithoutNavigation] = useState(false);
  const { asPath } = useRouter();
  if (asPath === "/login" && !pageWithoutNavigation) setPageWithoutNavigation(true);
  if (asPath !== "/login" && pageWithoutNavigation) setPageWithoutNavigation(false);
  console.log(pageWithoutNavigation);

  if (pageWithoutNavigation)
    return (
      <Layout>
        <Layout className="site-layout" className="site-layout" style={{ minHeight: "100vh" }}>
          <Content className="site-layout-background" style={{ padding: 8 }}>
            <Component {...pageProps} />
          </Content>
          <Footer style={{ textAlign: "center" }}>All rights reserved by Daifuku Singapore 2021</Footer>
        </Layout>
      </Layout>
    );
  return (
    <Layout>
      <NavBar />
      <Layout className="site-layout" className="site-layout" style={{ marginLeft: 240, minHeight: "100vh" }}>
        <Header className="site-layout-background" style={{ paddingLeft: 16 }}>
          <h2>ORACLE Monitoring System</h2>
        </Header>
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
        <Footer style={{ textAlign: "center" }}>All rights reserved by Daifuku Singapore 2021</Footer>
      </Layout>
    </Layout>
  );
}

export default MyApp;
