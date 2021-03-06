import 'tailwindcss/tailwind.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
  <Component {...pageProps} />
</ApolloProvider>
  // <Component {...pageProps} />
}

export default MyApp
