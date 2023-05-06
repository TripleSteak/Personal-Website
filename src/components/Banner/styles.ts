import React from "react";

export const bannerStyle = (bannerUrl: string) => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bannerUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top',
    position: 'fixed',
}) as React.CSSProperties;