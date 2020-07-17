// Write your Character component here
import React from 'react'


export default function Character(props) {
    console.log(props)
        const {
        gender,
        name,
        image,
        location,
        origin,
        status,
        species,
    } = props.character;
    // console.log(props.character)
    console.log(gender)
    return (
        <div>
            <h3>{props.character.name}</h3>
            <img src={props.character.image} alt={name}/>
            <p>Gender: {props.character.gender}</p>
            <p>Species: {props.character.species}</p>
            {/* <p>Location: {props.character.location}</p> */}
            {/* <p>Origin: {origin}</p> */}
            {/* <p>Status: {status}</p> */}
        </div>
    )
}
