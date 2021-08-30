
import ShelfComponent from "../Main/Shelf/Shelf";

import MinicartProvider from "../../context/minicartContext"


function Main() {
    return (
    <div className="container__main">
        <MinicartProvider>
            <ShelfComponent></ShelfComponent>
        </MinicartProvider>
    </div>
    );
}


export default Main;
