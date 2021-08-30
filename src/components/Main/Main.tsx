import CarouselComponent from "../Main/Carousel/Carrousel";
import ShelfComponent from "../Main/Shelf/Shelf";
import MinicartProvider from "../../context/minicartContext"


function Main() {
    return (
    <div className="container__main">
        <CarouselComponent></CarouselComponent>
        <MinicartProvider>
            <ShelfComponent></ShelfComponent>
        </MinicartProvider>
    </div>
    );
}


export default Main;
