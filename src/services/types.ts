import { z } from "zod";

export const ProjectCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),

  categories: z.array(ProjectCategorySchema),
  
  image: z.string().url(),
  image_dark: z.string().url(),
});

export type TProjectCategory = z.infer<typeof ProjectCategorySchema>;
export type TProject = z.infer<typeof ProjectSchema>;
