// Create me a simple Layout where I use Footer and Header components with daisyUI styling

import Footer from "./Footer";
import Header from "./Header";

//ILayoutProps interface with childeren prop
interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex-grow bg-base-100">{children}</main>
      <Footer />
    </div>
  );
}
