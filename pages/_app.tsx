import { StyledThemeProvider } from "@definitions/styled-components";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
