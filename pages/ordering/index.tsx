import Ordering from "@/app/components/screens/ordering/Ordering"
import { NextPageAuth } from "@/app/providers/private.route.interface"
import React from "react"

const OrderingPage: NextPageAuth = () => {
  return <Ordering />
}

OrderingPage.isOnlyUser = true

export default OrderingPage
