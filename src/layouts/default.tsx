import React, { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <div className="container my-0 mx-auto">{children}</div>
}

export default DefaultLayout
