import React, { useRef } from 'react'
import './CollapsibleContainer.scss'

export const CollapsibleContainer: React.FC<{
  isOpen: boolean
}> = ({ isOpen, children }) => {
  const bodyRef = useRef<HTMLDivElement>(null)
  return (
    <div
      className="CollapsibleContainer"
      style={{ height: isOpen ? bodyRef.current?.clientHeight : 0 }}
    >
      <div ref={bodyRef}>{children}</div>
    </div>
  )
}
