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

export const FeedbackSchema = z.object({
    name: z.string().min(2, "Имя может быть в одну букву?"),
    phone: z.string().regex(/^((\+7|7|8)+([0-9]){10})$/, "Некорректный номер телефона"),
    email: z.string().email("Некорректный email"),
    message: z.string().min(5, "Сообщение слишком короткое"),
});

export type TProjectCategory = z.infer<typeof ProjectCategorySchema>;
export type TProject = z.infer<typeof ProjectSchema>;
export type TFeedback = z.infer<typeof FeedbackSchema>;


export type TErrorField = {
    email?: [string],
    phone?: [string],
    name?: [string],
    message?: [string]
}

export type TFeedbackResponse = {
    message: string,
    errors?: TErrorField,
}