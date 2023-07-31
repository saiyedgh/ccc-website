import { React } from 'react';
import { BsEmojiSmileFill } from "react-icons/bs";

import '../css/ComingSoon.css';


const ComingSoon = () => {

    return (
        <>
            <div id='ComingSoon'>
                <div className="spinner">
                    <div className="main">
                        <div className="second">
                            <div className="third">
                        </div>
                        </div>
                    </div>
                    <p>Coming Soon <BsEmojiSmileFill /></p>
                </div>
            </div>
        </>
    )
}

export default ComingSoon;