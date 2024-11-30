import { useRecoilValue } from "recoil";
import languageState from "../state/languageState";

export default function Translator({item, name}){
    const language = useRecoilValue(languageState);
    
    return <>{`${item[`${name}${language}`]}`}</>
}