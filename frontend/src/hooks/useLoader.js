import { useDispatch, useSelector } from 'react-redux';
import { hide, show } from '../features/loader/loaderSlice';

export default function useLoader() {
    const loader = useSelector((state) => state.loader); 
    const dispatch = useDispatch();

    function showLoader() {
        dispatch(show());
    }

    function hideLoader() {
        dispatch(hide());
    }

    return { status: loader.status, showLoader, hideLoader };
}
