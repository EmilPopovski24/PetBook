

export const PetAccount = ({
    name,
    type,
    breed,
    age, 
    color
}) => {
    return(
        <>
        <h1>PetAccount</h1>
        <h1>{name}, {type}, {breed}, {age}, {color}</h1>
        </>
    )
}