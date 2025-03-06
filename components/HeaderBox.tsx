import { Span } from 'next/dist/trace'
import React from 'react'

const HeaderBox = ({type= "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="table-header-title">
        {title}

        {type === "greeting" && (
          <span className="text-bankGradient font-bold"> &nbsp;{user}</span>
        )}
          </h1>
          
          <p className='header-box-subtext'>
              {subtext}
          </p>
    </div>
  );
}

export default HeaderBox
