import React from 'react';
import ContentLoader from 'react-content-loader';

const Placeholder = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="preloader">
        <rect x="40" y="259" rx="6" ry="6" width="200" height="30" />
        <rect x="1" y="310" rx="10" ry="10" width="280" height="83" />
        <rect x="0" y="416" rx="6" ry="6" width="100" height="25" />
        <rect x="150" y="410" rx="20" ry="20" width="130" height="35" />
        <circle cx="140" cy="125" r="120" />
    </ContentLoader>
);

export default Placeholder;
