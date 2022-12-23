import React from 'react'

type Props = {
    img: string,
    title: string
}

const Header = (props: Props) => {
  return (
    <div  style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        height: "50vh",
        display:'flex ',
        alignItems: "center",
        justifyContent: "center"
      }}>
        {props.title}
      </div>
  )
}

export default Header