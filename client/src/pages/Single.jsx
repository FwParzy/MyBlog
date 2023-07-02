import React from 'react';
import Menu from '../components/Menu';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import User from '../img/monke_suit.jpg';
import { Link } from 'react-router-dom';

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img
                    src="http://www.todayifoundout.com/wp-content/uploads/2015/11/chimp-on-a-laptop.png"
                    alt=""
                />
                <div className="user">
                    <img src={User} alt="" />
                    <div className="info">
                        <span>Jon</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        {/*TODO Change 2 to post number */}
                        <Link to={'/write?edit=2'}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                </p>
            </div>
            <Menu />
            <div className="menue"></div>
        </div>
    );
};

export default Single;
