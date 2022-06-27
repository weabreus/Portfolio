import React from 'react'

const PortfolioSection: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <section className="section">
        {children}
    </section>
  )
}

export default PortfolioSection