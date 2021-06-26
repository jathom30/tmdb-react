import React from 'react'

export const Spacer = ({
  height = '1rem',
  width = '1rem',
}: {
  height?: string
  width?: string
}) => <div className="Spacer" aria-hidden style={{ height, width }} />
