import Nav from "./(components)/Nav";
import "./globals.css";

// import { config } from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/fontawesome-svg-icons/styles.css";

// config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
