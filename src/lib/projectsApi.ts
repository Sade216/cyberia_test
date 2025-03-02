import { z } from "zod";
import { api } from "@/services/settings";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProjectCategory, TProject, ProjectSchema, ProjectCategorySchema, TFeedback, FeedbackSchema, TFeedbackResponse } from "@/services/types";
import { AxiosError } from "axios";

export const fetchProjects = createAsyncThunk<TProject[]>(
    "projects/fetchAll",
    async (_, { rejectWithValue, signal }) => {
        try {
            const response = await api.get("/projects", {signal});
            const validatedData = z.array(ProjectSchema).safeParse(response.data.items);

            if (!validatedData.success) {
                console.error("Ошибка валидации данных проектов:", validatedData.error);
                return rejectWithValue("Ошибка валидации данных проектов");
            }

            return validatedData.data;
        } catch (err) {
            console.error("Ошибка запроса:", err);
            return rejectWithValue("Ошибка запроса");
        }
    }
);

export const fetchProjectCategories = createAsyncThunk<TProjectCategory[]>(
    "projects/fetchCategories",
    async (_, { rejectWithValue, signal }) => {
        try {
            const response = await api.get("/project-categories", {signal});
            const validatedData = z.array(ProjectCategorySchema).safeParse(response.data.items);

            if (!validatedData.success) {
                console.error("Ошибка валидации категорий:", validatedData.error);
                return rejectWithValue("Ошибка валидации категорий");
            }

            return validatedData.data;
        } catch (err) {
            console.error("Ошибка запроса:", err);
            return rejectWithValue("Ошибка запроса");
        }
    }
);

export const sendFeedback = createAsyncThunk<TFeedbackResponse, TFeedback, { rejectValue: TFeedbackResponse }>(
    "feedback/send",
    async (feedbackData, { rejectWithValue, signal }) => {
        try {
            const parsedData = FeedbackSchema.safeParse(feedbackData);
            if (!parsedData.success) {
                console.error("Ошибка валидации:", parsedData.error);
                const formattedErrors: Record<string, string[]> = {};

                parsedData.error.errors.forEach((zodError) => {
                    const field = zodError.path[0];
                    if (!formattedErrors[field]) {
                        formattedErrors[field] = [];
                    }
                    formattedErrors[field].push(zodError.message);
                });
                return rejectWithValue({message: "Некорректные данные формы:", errors: formattedErrors});
            }

            const response = await api.post("/feedbacks",{ signal }, {params: parsedData.data});
            return response.data
        } catch (err) {
            const {response} = err as AxiosError<TFeedbackResponse>
            const errorMessage = response?.data?.message || "Ошибка отправки данных"
            const ErrorsArray = response?.data.errors

            console.error({message: errorMessage, errors: ErrorsArray});
            return rejectWithValue({message: errorMessage, errors: ErrorsArray});
        }
    }
);