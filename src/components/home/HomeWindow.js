import Header from "../header/Header";
import './homeWindow.scss'
import Content from "../content/Content";

export default function HomeWindow (){
    return (
        <div className='homeBlock'>
            <Header/>
            <Content/>
        </div>
        );
}
