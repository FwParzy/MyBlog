import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
  //     img: 'https://emsnest.org/wp-content/uploads/2023/01/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
  //     img: 'https://o.aolcdn.com/hss/storage/midas/832ed1bdd3c2e2279112403d8bfb3e80/200374623/snow+monkey+iphone.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
  //     img: 'https://t4.ftcdn.net/jpg/01/44/89/37/360_F_144893797_GyALGMXV207yrF9YMczEEXFwKYOYIfSP.jpg',
  //   },
  //   {
  //     id: 4,
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
  //     img: 'https://images.csmonitor.com/csmarchives/2010/12/1203-monkeys-emperor-tamarin.jpg?alias=standard_900x600nc',
  //   },
  // ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
