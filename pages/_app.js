import { Layout } from "antd";

import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar />
      <Layout className="site-layout" className="site-layout" style={{ marginLeft: 200, minHeight: "100vh" }}>
        <Header className="site-layout-background" style={{ paddingLeft: 16 }}>
          App Bar
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
