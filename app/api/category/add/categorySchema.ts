import { z } from "zod";
const CategorySchema = z.object({
  categoryName: z
    .string()
    .min(6, "Requires Category name to be more than 3 characters")
    .max(255),
});
export default CategorySchema;
