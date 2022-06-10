import React from 'react';

import { IFeatureElement } from '../../interfaces/components/featureSections/featured';

import styles from '../../styles/components/featureSections/featured.module.scss'

export const FeatureExtended = (props: IFeatureElement) => (
  <div className={`${styles['features']}`}>
    <div className={`${styles['feature']}`}>
      <div className={`${styles['imgWrapper']}`}>
        <img src={props.imgSrc} className={`${styles['feature-img-top']}`} alt="" />
      </div>
      <div className={`${styles['feature__body']}`}>
        <h4 className={`${styles['feature__title']}`}>{props.title}</h4>
        <p className={`${styles['feature__text']}`}>{props.body}</p>
      </div>
      <div className="feature__cta">
        <a href={props.link} className={`${styles['btn']} ${styles['btn-primary']} ${styles['btn--feature']}`}>{props.ftrBtnTxt}</a>
      </div>
    </div>
  </div>
);
