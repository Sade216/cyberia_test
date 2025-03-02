import { createSlice } from "@reduxjs/toolkit";
import { TProject, TProjectCategory } from "@/services/types";
import { fetchProjectCategories, fetchProjects } from "../projectsApi";

type TInitialState = {
    projects: TProject[] | null,
    categories: TProjectCategory[] | null,
    loading: boolean,
    error: string | null,
}

const initialState: TInitialState = {
    projects: null,
    categories: null,
    loading: false,
    error: null,
}

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //projects
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            //categories
            .addCase(fetchProjectCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjectCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchProjectCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const {  } = projectsSlice.actions;

export default projectsSlice.reducer;
