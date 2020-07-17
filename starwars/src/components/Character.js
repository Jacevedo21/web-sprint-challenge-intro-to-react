// Write your Character component here
import React from 'react'
import { Container } from '../components/styles'

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
    console.log(location)
    // console.log(gender)


    return (
        <Container direction='column' className='card'>
            <h3>{props.character.name}</h3>
            <Container>
                <Container width={'40%'}>
                    <img src={props.character.image} alt={name} />
                </Container>
                <Container width ={'40%'} direction={'column'}>
                <p>Gender: {props.character.gender}</p>
                <p>Species: {props.character.species}</p>
                <p>Location: {props.character.location.name}</p>
                <p>Origin: {props.character.origin.name}</p>
                <p>Status: {status}</p>
                </Container>
            </Container>
        </Container>
    )
}
