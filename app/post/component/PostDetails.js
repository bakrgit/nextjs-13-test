"use client"
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import {useEffect, useState} from "react";

const PostDetailsComponent = ({userID}) => {
    const [value, setValue] = useState(userID);

    return (
        <>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
              <h1>{value}</h1>
        </>
    )
}

export default PostDetailsComponent;