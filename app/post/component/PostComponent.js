"use client"
import {useRouter} from "next/navigation";

const PostComponent = ({data}) => {
    const router = useRouter() ;
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            <button onClick={()=>router.push(`/post/${item.id}`)}>click</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostComponent;
