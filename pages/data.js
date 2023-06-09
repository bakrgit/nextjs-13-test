import Head from "next/head";

const Data = ({data}) => {
    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
//SSR
// export async function getServerSideProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     return {
//         props: {
//             data
//         }
//     }
// }
//SSG //ISR
export async function getStaticProps({params}) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props: {
            data
        }
        , revalidate: 4
    }
}
// export async function getStaticPaths() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     const paths = data.map((item) => {
//         return {
//             params: {
//                 id: item.id.toString()
//             }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }
export default Data;