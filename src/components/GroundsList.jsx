
import '../css/GroundsList.css';

const GroundsList = () => {

    const ground = [
        { name: "Hanover Park, IL" },
        { name: "Dee Park Ground, IL" },
        { name: "Lincoln Park, WI" },
        { name: "Mossville Park, IL" },
        { name: "Naperville Park, IL" },
        { name: "Skokie Park, IL" },
        { name: "Springfield Park, IL" },
        { name: "Tippecanoe Park, WI" },
        { name: "Vernon Hills Park, IL" },
        { name: "Washington Park, IL" },
    ]

    return (
        <>   
            <div className='ground-names-container'>
                {ground.map((ground, key) => (
                    <h5 key={key} className="ground-item">
                        {ground.name}
                    </h5>
                ))} 
            </div>
        </>
    )
}

export default GroundsList;