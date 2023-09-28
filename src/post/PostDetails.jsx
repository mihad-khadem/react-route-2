import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const {userId} = useParams()
    const navigate = useNavigate()
    const {id, title, body} = post;
    console.log(userId);
    const handleGoBack = () => {
        navigate(-1)

    }
    

    return (
        <div>
            <h4>Post Details About</h4>


            <h2>Title: {title}</h2>\
            <p>Description : {body}</p>
            <button onClick={() => handleGoBack()}>Go Back</button>

        </div>
    );
};

export default PostDetails;