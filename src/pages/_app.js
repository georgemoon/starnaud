import axios from "axios";
import { SWRConfig } from "swr";

import "bootstrap/dist/css/bootstrap.min.css";

const SWR_CONFIG = {
  dedupingInterval: 24 * 60 * 60 * 1000,
  revalidateOnFocus: false,
  fetcher: (url) => axios.get(url).then((res) => res.data),
};

export default function App({ Component, pageProps }) {
  return <SWRConfig value={SWR_CONFIG}>
    <Component {...pageProps} />
  </SWRConfig>;
}
