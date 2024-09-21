import {useRouteError} from "react-router-dom";
import NotFoundImg from '../../assetc/ImageError/notFound-img.webp'
export default function NotFound() {
    const error: any = useRouteError();
    return (
        <div id="error-page" style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '10px',
        }}>
            <img style={{
                width: '330px',
                height: '330px',
            }} src={NotFoundImg} alt="error-img"/>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

        </div>
    );
}