

export const PetItem = ({
    name,
    type,
    breed,
    age,
    color
}) => {
    return (
        <>
            <hr>
            <h1>{name}</h1>
            <h3>Type: {type}</h3>
            <h3>Breed: {breed}</h3>
            <h3>Age: {age}</h3>
            <h3>Color: {color}</h3>
            </hr>
        </>
    )
}