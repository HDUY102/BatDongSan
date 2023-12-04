import {z} from "zod";
const ArticleSchema = z.object({
    Title: z.string().min(6,"Requires Title to be more than 3 characters").max(255),
    Content: z.string().min(10, "Requires Content to be more than 3 characters ").max(255)
})
export default ArticleSchema