import React from 'react';

import styles from '../../styles/components/titles/titleSection.module.scss';

export interface ITitleSection {
    title?: string,
    subtitle?: string | React.ReactNode,
    link?: string | React.ReactNode,
    img?: string
}

export const TitleSection = (props: ITitleSection) => (
        <div className={`${styles['section__Title']}`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className={`${styles['line-icon--title']}`} src={props.img} />
                        <h1 className={`${styles['h1']}`}>{props.title}</h1>
                        <h2 className={`${styles['h2']}`}>{props.subtitle}</h2>
                        <div className={`${styles['title-link']}`}>{props.link}</div>
                    </div>
                </div>
            </div>
        </div>
);