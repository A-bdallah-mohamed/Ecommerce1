import React from 'react'
import useIntersection from '../Custom hooks/UseIntersection'
export default function Button({ animation , text }) {
        const [button1 , isbutton1inview] = useIntersection(true)
  return (
    <button ref={button1} className={`${animation ? isbutton1inview ? 'Ecommerce1-button1inview' : 'Ecommerce1-button1' : 'BUTTON'}`}>{text}</button>
  )
}
