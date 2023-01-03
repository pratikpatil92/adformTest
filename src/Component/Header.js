import React, { memo } from 'react'

function Header(props) {
  return (
    <h2 className="text-center mt-3 mb-3">{props.title}</h2>
  )
}

export default memo(Header)
