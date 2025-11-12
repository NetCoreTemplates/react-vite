import { useMetadata, authContext } from "@servicestack/react"
import { JsonServiceClient } from "@servicestack/client"
import { Authenticate } from "@/dtos.ts"

export const client = new JsonServiceClient()
export const metadata = useMetadata(client)

// Load Metadata & Auth State on Startup
export async function init() {
    const authCtx = authContext()
    return await Promise.all([
        metadata.loadMetadata(),
        client.post(new Authenticate())
            .then(r => {
                authCtx.signIn(r)
            }).catch(() => {
            authCtx.signOut()
        })
    ])
}

export function getRedirect(searchParams:URLSearchParams) {
    const redirect = searchParams.get('redirect')
    return redirect && Array.isArray(redirect)
        ? redirect[0]
        : redirect
}