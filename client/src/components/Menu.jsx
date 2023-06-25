import React from 'react'

export const Menu = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://emsnest.org/wp-content/uploads/2023/01/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://o.aolcdn.com/hss/storage/midas/832ed1bdd3c2e2279112403d8bfb3e80/200374623/snow+monkey+iphone.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://t4.ftcdn.net/jpg/01/44/89/37/360_F_144893797_GyALGMXV207yrF9YMczEEXFwKYOYIfSP.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.csmonitor.com/csmarchives/2010/12/1203-monkeys-emperor-tamarin.jpg?alias=standard_900x600nc",
    },
  ];

  return (
    <div className='menu'>
    <h1>Other posts you may like</h1>
    {posts.map(post=>(
      <div className='post' key={post.id}>
      <img src={post.img} alt=""/>
      <h2>{post.title}</h2>
      <button type="">Read More</button>
        
      </div>
    ))}
    </div>
  )
}
export default Menu;
