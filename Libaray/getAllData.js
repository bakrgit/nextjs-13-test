
const getData = async (url ) => {

    const res = await fetch(url ,{
        // cache: "force-cache" //SSG //Default: default
        //    cache:"no-store" //SSR
        next:{
            revalidate:5 //ISR
        }
    })
    const data = await res.json()
    return data
}
export default getData ;