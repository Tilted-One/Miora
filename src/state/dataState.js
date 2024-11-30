import { atom, selector } from "recoil";

const dataState = atom({
    key: 'dataState',
    default: null,
});

export const categoriesDataState = selector({
    key: 'categoriesDataState',
    get: ({get}) => {
        const data = get(dataState);
        return data.specGroups.find(x=>x.id === data.categorySpecGroupId).specValues;
    },
  });


export const manufacturersDataState = selector({
    key: 'manufacturersDataState',
    get: ({get}) => {
        const data = get(dataState);
        return data.specGroups.find(x=>x.id === data.manufacturerSpecGroupId).specValues;
    },
  });

export const productsDataState = selector({
    key: 'productsDataState',
    get: ({get}) => {
        const data = get(dataState);
        return data.products;
    },
  });




export default dataState