import {z} from "zod";
const ArticleSchema = z.object({
    Title: z.string().min(6).max(255)
    // taskName: z.string().min(6,{message:"Độ dài phải trên 6"}).max(255)
})
export default ArticleSchema