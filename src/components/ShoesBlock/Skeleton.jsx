import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="42" y="225" rx="11" ry="11" width="280" height="88" />
    <rect x="211" y="342" rx="23" ry="23" width="110" height="45" />
    <rect x="41" y="31" rx="0" ry="0" width="280" height="160" />
    <rect x="48" y="352" rx="0" ry="0" width="41" height="27" />
  </ContentLoader>
);

export default Skeleton;
