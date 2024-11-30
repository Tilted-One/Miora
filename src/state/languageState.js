import { atom } from "recoil";

const historyEffect = () => ({_, onSet}) => {
    onSet((newValue, _) => {
      sessionStorage.setItem('language', newValue)
    });
  };

const languageState = atom({
    key: 'languageState',
    default: sessionStorage.getItem("language") ?? "En",
    effects: [ historyEffect() ]
});

export default languageState