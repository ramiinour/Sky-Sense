import { ApolloClient , InMemoryCache } from "@apollo/client";


export const getClientt = ()=> {
    const client = new ApolloClient({
        uri:process.env.API_URL,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`
        }
    
    })

    return client
}