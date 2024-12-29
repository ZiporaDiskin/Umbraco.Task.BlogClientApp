import { BlogPost } from "./blog-post.interface";

export interface ApiResponse 
{
    items: BlogPost[],
total:number
}