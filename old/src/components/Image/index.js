import React from 'react'

const Image = ({ alt, src, size }) => (
  <img
    className="Image"
    src={src}
    alt={alt}
    style={{ width: size, height: size, borderRadius: size }}
  />
)

export default Image
