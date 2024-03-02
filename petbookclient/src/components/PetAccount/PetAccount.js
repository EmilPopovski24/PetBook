

export const PetAccount = ({
    name,
    type,
    breed,
    age, 
    color
}) => {
    return(
        <>
        <h1>{name}, {type}, {breed}, {age}, {color}</h1>
        </>
    )
}