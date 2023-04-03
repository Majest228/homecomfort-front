import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "@/app/components/layout/Layout"
import { Provider } from "react-redux"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import AuthProvider from "@/app/providers/AuthProvider"
import { TypeComponentAuthFields } from "@/app/providers/private.route.interface"
import store from "@/app/store/store"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider Component={Component}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  )
}
