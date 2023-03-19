import React from "react"
import { ILayout } from "@/app/components/layout/layout.interface"
import Header from "@/app/components/layout/header/Header"
import Footer from "@/app/components/layout/footer/Footer"

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
