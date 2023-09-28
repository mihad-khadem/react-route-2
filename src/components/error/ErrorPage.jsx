import { useRouteError } from 'react-router-dom';
import './error.css'

const ErrorPage = () => {
    const error = useRouteError();
    const {statusText, status} =error
    console.log(error);
    return (
        <div>
            <h1>Oops</h1>

            <div className='errorMsg'>
                <h3>{status}</h3>
                <h3>{statusText}</h3>
            </div>

        </div>
    );
};

export default ErrorPage;