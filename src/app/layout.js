
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// we can't create SEssionProvider in our layout.js bceasue it needs to be a client component
// and our metaData requiresa server componrnt , so we need to creaste to our session provider
// in another component (provider/provider.js)
export const metadata = {
  title: "Create Next App",
  description: "get"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
       <Provider>


        {children}
 
       </Provider>
      
    
      
      </body>
    </html>
  );
}
