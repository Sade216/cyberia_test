"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumb.module.css";

import { paths } from "@/services/setiings";

const Breadcrumb = () => {
    const pathname = usePathname();

    const getBreadcrumbs = (pathname: string) => {
        const segments = pathname.split("/").filter(Boolean);
        let currentPath = "/";

        return segments.map((segment) => {
            currentPath += `${segment}`;

            const pathMatch = Object.values(paths).find(
                (path) => path.path === currentPath
            );

            return {
                label: pathMatch
                    ? pathMatch.label
                    : segment.charAt(0).toUpperCase() + segment.slice(1),
                href: currentPath,
            };
        });
    };

    const breadcrumbs = getBreadcrumbs(pathname);

    return (
        <nav
            aria-label="breadcrumb"
            className={styles.Wrapper}>
            <ol className={styles.Breadcrumb}>
                <li className={styles.BreadcrumbItem}>
                    <Link
                        href="/"
                        className={styles.BreadcrumbLinkMain}>
                        Главная
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={index}
                        className={styles.BreadcrumbItem}>
                        <>
                            <span className={styles.Separator}> / </span>
                            <Link
                                href={breadcrumb.href}
                                className={styles.BreadcrumbLink}>
                                {breadcrumb.label}
                            </Link>
                        </>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
