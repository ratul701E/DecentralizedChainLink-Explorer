import { IComment } from './../../../components/CommunityPage';
import axios from "axios"

async function getAllCommentByPostID(postid: number){
    const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT+`/comments/post/${postid}`)
    const comments:IComment[] = res.data
    return comments
}

export default getAllCommentByPostID