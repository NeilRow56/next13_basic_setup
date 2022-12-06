import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import Provider from '../components/provider'
// import Sidebar from "./sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Provider>
        <Header />
        
        {/* <Sidebar /> */}
        <main>{children}</main>
        <Footer />
        </Provider>
      </body>
    </html>
  );
}
