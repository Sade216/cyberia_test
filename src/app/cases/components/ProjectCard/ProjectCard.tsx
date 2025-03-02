import React from "react";

import { TProject } from "@/services/types";

import styles from "./ProjectCard.module.css";
import Image from "next/image";
import CornersIcon from "@/components/Icons/CornersIcon";

type TCardProps = {
    data: TProject;
    className?: string;
};

function ProjectCard({ className, data }: TCardProps) {
    return (
        <section className={`${className && className} ${styles.Card}`}>
            <Image
                loader={() => data.image}
                src={data.image}
                alt="food-image"
                width={300}
                height={300}
                unoptimized
                priority={false}
            />
            <div className={styles.Overlay}></div>
            <div className={styles.Content}>
                <CornersIcon />
                <h3 className={styles.Title}>{data.title}</h3>
                <p className={styles.Description}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam consequatur itaque corporis doloremque.
                </p>
            </div>
        </section>
    );
}

export default ProjectCard;
