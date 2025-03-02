"use client"

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";

import { fetchProjectCategories, fetchProjects } from "@/lib/projectsApi";
import React, { useEffect, useState } from "react";

import styles from "./Projects.module.css";
import Loader from "@/components/Icons/Loader/Loader";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const dispatch = useAppDispatch();
    const { projects, categories, loading, error } = useAppSelector(
        (state: RootState) => state.projects
    );

    useEffect(() => {
        if(projects && categories) return

        const fetchProjectsPromise = dispatch(fetchProjects());
        const fetchProjectsCategoriesPromise = dispatch(fetchProjectCategories());

        return ()=>{
            fetchProjectsPromise.abort()
            fetchProjectsCategoriesPromise.abort()
        }
    }, []);

    const filteredData =
        activeTab === null
            ? projects
            : projects?.filter((item) =>
                  item.categories.some(
                      (category) => category.name === activeTab
                  )
              );

    return (
        <div className={styles.TabsContainer}>
            {loading && !error? (
                <Loader />
            ) : (
                <>
                    <nav className={styles.Tabs}>
                        {categories?.map((category) => (
                            <button
                                key={category.id}
                                className={`${styles.TabButton} ${
                                    activeTab === category.name
                                        ? styles.active
                                        : ""
                                }`}
                                onClick={() => setActiveTab(category.name)}>
                                {category.name}
                            </button>
                        ))}
                    </nav>

                    <div className={styles.TabContent}>
                        {filteredData && filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <ProjectCard
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        ) : (
                            <p>Нет данных для данной категории</p>
                        )}
                    </div>
                </>
            )}

            {error && (
                <p>{`Ошибка: ${error}`}</p>
            )}
        </div>
    );
}

export default Projects;
