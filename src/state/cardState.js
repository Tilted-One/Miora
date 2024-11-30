import { atom } from "recoil";

function getState() {
    const state = sessionStorage.getItem('cardAmounts')
    if (state) {
        return JSON.parse(state)
    }
    return []
}

const historyEffect = () => ({_, onSet}) => {
    onSet((newValue, _) => {
      sessionStorage.setItem('cardAmounts', JSON.stringify(newValue))
    });
  };

const cardState = atom({
    key: 'cardState',
    default: getState(),
    effects: [ historyEffect() ],
});

export default cardState;