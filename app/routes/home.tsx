import type { Route } from "./+types/home";

import App from "./index";
import Footer from "../components/Footer";
import Header from "../components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chris Bicknell" },
    { name: "Chris Bicknell website", content: "Chris Bicknell portfolio" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
        <App />;
      <Footer />
    </>
  );
}
