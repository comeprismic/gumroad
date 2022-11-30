import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ nav, bottomnav, children }) => {
  return (
    <div>
      <Header nav={nav} />
      <main>{children}</main>
      <Footer bottomnav={bottomnav} />
    </div>
  );
};