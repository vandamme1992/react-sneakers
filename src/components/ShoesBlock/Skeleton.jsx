import React from 'react';
import ContentLoader from 'react-content-loader';
import style from './Skeleton.module.scss';

const Skeleton = (props) => (
  <ContentLoader
    className={style.root}
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="65" y="207" rx="11" ry="11" width="280" height="88" />
    <rect x="235" y="312" rx="23" ry="23" width="110" height="45" />
    <rect x="65" y="20" rx="0" ry="0" width="280" height="160" />
    <rect x="65" y="321" rx="0" ry="0" width="41" height="27" />
  </ContentLoader>
);

export default Skeleton;
