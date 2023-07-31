import { useState } from 'react';
import '../css/Squad.css';

import SquadControls from './SquadControllers';
import SquadData from './SquadNames';


const SquadSlider = ({squad}) => {

    const [currentPlayer, setCurrentPlayer] = useState(0);

    const prev = () => {
        const index = currentPlayer > 0 ? currentPlayer - 1 : squad.length - 1;
        setCurrentPlayer(index)
    }
      
    const next = () => {
        const index = currentPlayer < squad.length - 1 ? currentPlayer + 1 : 0;
        setCurrentPlayer(index)
    }


    return (
        <>
        <section id='Squad'>
            <h2>Our Squad</h2>
            <div className='squad-container'>
            <SquadControls prev={prev} next={next} />
                <div className='squad'>
                    <div
                        className="squad-inner"
                        style={{transform: `translate(${-currentPlayer *  100}%)`}}
                    >        
                        {SquadData.map((data, key) => (
                            <div key={key} className="squad-item">
                                <h6>
                                    <span className='first-name'>{data.first}</span>
                                    {/* <span> </span>  */}
                                    <span className='last-name'>{data.last}</span>
                                </h6>
                            </div>
                        ))}   
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default SquadSlider;