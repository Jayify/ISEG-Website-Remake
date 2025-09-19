import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { Charm, Courier_Prime, Cutive_Mono } from "next/font/google";

// Load fonts
const charm = Charm({ subsets: ["latin"], weight: ["400", "700"] });
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const cutiveMono = Cutive_Mono({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${charm.className} ${courierPrime.className} ${cutiveMono.className}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
