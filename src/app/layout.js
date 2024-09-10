import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login - ajosdata | Buy Data, Airtime to cash, Bills Payment",
  description:
    "🎁 Biggest Bonaza 🎁 for Internet Data Plan and Airtime Recharge for all networks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
