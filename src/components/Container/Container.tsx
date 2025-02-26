import React, { ReactNode } from 'react'

import styles from './Container.module.css'

type Props = {
    children: ReactNode,
    className?: string
}

function Container({children, className}: Props) {
  return (
    <div className={`${styles.Container} ${className ? className: ''}`}>
        {children}
    </div>
  )
}

export default Container