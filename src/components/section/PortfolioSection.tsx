import React from 'react'

const PortfolioSection: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <section className="section pl-[20%] pr-[5%] lg:px-[5%] h-[100vh] md:h-[100vh]">
        {children}
    </section>
  )
}

export default PortfolioSection