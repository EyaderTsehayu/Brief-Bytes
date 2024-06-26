import Nav from "@components/Nav";
import Provider from "@components/provider";

import "@styles/global.css";
export const metadata = {
  title: "Brief Byte",
  description: "Discover and Share Software Engineering Short Notes",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {" "}
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>{" "}
    </html>
  );
};

export default RootLayout;
