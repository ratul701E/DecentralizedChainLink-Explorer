import { IPost } from "@/components/CommunityPage"
import axios from "axios"

async function getAllPosts(): Promise<IPost[]> {
  const result = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT+"/posts")
  const data = result.data
  return data
}

export default getAllPosts