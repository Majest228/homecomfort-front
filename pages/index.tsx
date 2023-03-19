import Head from "next/head"
import dynamic from "next/dynamic"

const HomePage = dynamic(() => import("../app/components/screens/home/Home"), {
  ssr: false,
})

export default function Home() {
  return <HomePage />
}
