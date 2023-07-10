import React, { useContext, useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import User from '../img/monke_suit.jpg';
import { AuthContext } from '../context/authContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.postImg} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          {/* <img src={User} alt="" /> */}
          <div className="info">
            <span>{post.username}</span>
            <p>{moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username &&
            post.username &&
            currentUser.username === post.username && (
              <div className="edit">
                <Link to={'/write?edit=6'}>
                  <img src={Edit} alt="" />
                </Link>
                <img onClick={handleDelete} src={Delete} alt="" />
              </div>
            )}
        </div>
        <h1>{post.title}</h1>
        {post.descr}
      </div>
      <Menu />
      <div className="menue"></div>
    </div>
  );
};

export default Single;
