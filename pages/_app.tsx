import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "@/app/components/layout/Layout"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "../app/store/store"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import AuthProvider from "@/app/providers/AuthProvider"
import { TypeComponentAuthFields } from "@/app/providers/private.route.interface"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={Component}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
