import PostComponent from "@/app/post/component/PostComponent";
import getData from "../../Libaray/getAllData";
const Post =async () => {
    const data = await getData("https://jsonplaceholder.typicode.com/posts")
    return (
        <>
        <h1>post page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>


            {data && <PostComponent data={data}/>}

        </>
    )
}

export default Post;