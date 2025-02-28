import React, { ReactNode } from 'react'

import styles from './Container.module.css'

type Props = {
    children: ReactNode,
    className?: string,
    forPage?: boolean,
}

function Container({children, className, forPage = false}: Props) {
  return (
    <section className={`${styles.Container} ${forPage && styles.PageContainer} ${className && className}`}>
        {children}
    </section>
  )
}

export default Container