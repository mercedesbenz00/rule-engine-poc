import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Media,
} from 'reactstrap';
import classnames from 'classnames';

import avatar3 from '../../../assets/images/users/avatar-1.jpg';
import posts from './data';

const FormPost = () => {
    return (
        <form action="#" className="comment-area-box">
            <textarea
                rows="4"
                className="form-control border-0 resize-none"
                placeholder="Write something...."></textarea>
            <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                <div>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="uil uil-scenery"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="uil uil-location"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
                        <i className="uil uil-paperclip"></i>
                    </Link>
                </div>
                <button type="submit" className="btn btn-sm btn-success">
                    <i className="uil uil-message mr-1"></i>Post
                </button>
            </div>
        </form>
    );
};

const createMarkup = text => {
    return { __html: text };
};

const PostComment = ({ comment, isActionAllowed, toggleLikeOnComment }) => {
    return (
        <Media className="mt-3">
            <img className="mr-2 rounded" src={comment.author.avatar} alt="" height="32" />
            <Media body>
                <h5 className="m-0">{comment.author.name} </h5>
                <p className="text-muted mb-0">
                    <small>{comment.postedOn}</small>
                </p>

                <p className="my-1" dangerouslySetInnerHTML={createMarkup(comment.content)}></p>

                {isActionAllowed && (
                    <div>
                        <Link
                            to="#"
                            className="btn btn-sm btn-link text-muted p-0"
                            onClick={() => toggleLikeOnComment(comment)}>
                            <i
                                className={classnames('uil', 'uil-heart', 'mr-1', {
                                    'text-danger': comment.isLiked,
                                })}></i>{' '}
                            Like
                        </Link>
                        <Link to="#" className="btn btn-sm btn-link text-muted p-0 pl-2">
                            <i className="uil uil-comments-alt mr-1"></i> Reply
                        </Link>
                    </div>
                )}

                {comment.replies && (
                    <React.Fragment>
                        {comment.replies.map((reply, index) => {
                            return (
                                <PostComment
                                    key={index}
                                    comment={reply}
                                    isActionAllowed={false}
                                    toggleLikeOnComment={toggleLikeOnComment}
                                />
                            );
                        })}
                    </React.Fragment>
                )}
            </Media>
        </Media>
    );
};

const Post = ({ post, user, toggleLike, toggleLikeOnComment }) => {
    return (
        <Card>
            <CardBody className="pb-1">
                <Media>
                    <img className="mr-2 rounded" src={post.author.avatar} alt="" height="32" />
                    <Media body>
                        <UncontrolledDropdown className="float-right">
                            <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow card-drop p-0">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </DropdownToggle>

                            <DropdownMenu right>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <h5 className="m-0">{post.author.name}</h5>
                        <p className="text-muted">
                            <small>
                                {post.postedOn} <span className="mx-1">⚬</span>
                                <span>{post.scope}</span>
                            </small>
                        </p>
                    </Media>
                </Media>

                <hr className="m-0" />

                <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>

                <hr className="m-0" />

                <div className="my-1">
                    <Link to="#" className="btn btn-sm btn-link text-muted pl-0" onClick={() => toggleLike(post)}>
                        <i className={classnames('mdi', 'mdi-heart', { 'text-danger': post.isLiked })}></i>{' '}
                        {post.totalLikes} Likes
                    </Link>
                    <Link to="#" className="btn btn-sm btn-link text-muted">
                        <i className="uil uil-comments-alt mr-1"></i>
                        {post.totalComments} Comments
                    </Link>
                    <Link to="#" className="btn btn-sm btn-link text-muted">
                        <i className="uil uil-share-alt mr-1"></i>
                        Share
                    </Link>
                </div>

                <hr className="m-0" />

                <div className="mt-3">
                    {post.comments.map((comment, index) => {
                        return (
                            <PostComment
                                key={index}
                                comment={comment}
                                isActionAllowed={true}
                                toggleLikeOnComment={toggleLikeOnComment}></PostComment>
                        );
                    })}
                </div>

                <hr />

                {user && (
                    <Media className="mb-2">
                        <img src={user.avatar} height="32" className="align-self-start rounded mr-2" alt="" />
                        <Media body>
                            <input
                                type="text"
                                className="form-control border-0 form-control-sm"
                                placeholder="Write a comment"
                            />
                        </Media>
                    </Media>
                )}
            </CardBody>
        </Card>
    );
};

const LoadMore = () => {
    return (
        <div className="text-center mb-3">
            <Link to="#" className="text-danger">
                <i className="mdi mdi-spin mdi-loading mr-1 font-16"></i> Load more
            </Link>
        </div>
    );
};

// feeds
const Feeds = () => {
    const [activeTab, setActiveTab] = useState('post');
    const [user] = useState({ id: 1, avatar: avatar3 });

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const toggleLike = post => {
        post.isLiked = !post.isLiked;
    };

    const toggleLikeOnComment = comment => {
        comment.isLiked = !comment.isLiked;
    };

    return (
        <React.Fragment>
            <Card>
                <CardBody className="p-0">
                    <Nav tabs className="nav-bordered">
                        <NavItem>
                            <NavLink
                                href="#"
                                className={classnames({ active: activeTab === 'post' })}
                                onClick={() => {
                                    toggle('post');
                                }}>
                                <i className="mdi mdi-pencil-box-multiple font-18 d-md-none d-block"></i>
                                <span className="d-none d-md-block">Create Post</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="#"
                                className={classnames({ active: activeTab === 'video' })}
                                onClick={() => {
                                    toggle('video');
                                }}>
                                <i className="mdi mdi-image font-18 d-md-none d-block"></i>
                                <span className="d-none d-md-block">Photos/Videos</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="#"
                                className={classnames({ active: activeTab === 'story' })}
                                onClick={() => {
                                    toggle('story');
                                }}>
                                <i className="mdi mdi-book-open-variant font-18 d-md-none d-block"></i>
                                <span className="d-none d-md-block">Story</span>
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId={'post'} className="p-3">
                            <div className="border rounded">
                                <FormPost />
                            </div>
                        </TabPane>
                        <TabPane tabId={'video'} className="p-3">
                            <div className="border rounded">
                                <FormPost />
                            </div>
                        </TabPane>
                        <TabPane tabId={'story'} className="p-3">
                            <div className="border rounded">
                                <FormPost />
                            </div>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>

            {posts.map((post, index) => {
                return (
                    <Post
                        post={post}
                        key={index}
                        user={user}
                        toggleLike={toggleLike}
                        toggleLikeOnComment={toggleLikeOnComment}
                    />
                );
            })}

            <LoadMore></LoadMore>
        </React.Fragment>
    );
};

export default Feeds;
