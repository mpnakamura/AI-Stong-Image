import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // コンポーネントのロジック
  return <div>{children}</div>;
};

export default Layout;
