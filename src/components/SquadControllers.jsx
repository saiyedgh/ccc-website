import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SquadControls = ({prev, next}) => (
    <>
        <button className="squad-control left" onClick={prev}><BsChevronLeft /></button>
        <button className="squad-control right" onClick={next}><BsChevronRight /></button>
    </>
)

export default SquadControls;