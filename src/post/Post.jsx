import { Link } from 'react-router-dom';
import './post.css';
const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className='posts'>
            <h4>Post Id : {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/posts/${id}`}>Details</Link>
        </div>
    );
};

export default Post;