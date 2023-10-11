import "@/assets/css/tailwind.css";
import "@/assets/scss/icons.scss";
import "@/assets/scss/tailwind.scss";
import Footer from "../Footer/page";
import Header from "../Header";

type Prop = {
  children: JSX.Element;
};
export default function Layout({ children }: Prop) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}
