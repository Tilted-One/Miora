import App from '../App';
import Loader from '../ui/Loader';
import { useRecoilState } from 'recoil';
import dataState from '../state/dataState';
import { getDataAsync } from '../api';
import { useEffect } from 'react';


export default function InitializePage() {
    const [data, setData] = useRecoilState(dataState);

    useEffect(()=> {
        (async () => {
            const newData = await getDataAsync();
            setData(newData);
        })();
    }, []);

    if (data === null) {
        return <Loader />
    }

    return <App/>
}