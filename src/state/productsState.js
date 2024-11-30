import { atom } from "recoil";

const productsState = atom({
    key: 'productsState',
    default: null,
});

export default productsState