import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { useAction } from "../hook/useAction";
import { useAuth } from "../hook/useAuth";
import { TypeComponentAuthFields } from "./private.route.interface";

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ Component: { isOnlyUser }, children }) => {

    const { user } = useAuth()

    const router = useRouter()


    if (user && isOnlyUser) return <>{children}</>

    router.pathname !== '/' && router.replace('/')
    return null

}


export default CheckRole