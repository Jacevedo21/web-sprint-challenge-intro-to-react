// import React from 'react'



// export default function CharacterList(props) {
//     return (
//         {props.character.map((character) => 
//             )}
//     )
// }

// import React from 'react'


import React from 'react'
import Character from './Character'

export default function CharacterList(props) {
    return (
        <div>
            {props.character.map((character) => 
            <Character character={character} />
            )}
        </div>
    )
}
