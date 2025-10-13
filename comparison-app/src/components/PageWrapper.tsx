import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className = '',
}) => {
  return <div className={`page-transition ${className}`}>{children}</div>;
};

export default PageWrapper;
