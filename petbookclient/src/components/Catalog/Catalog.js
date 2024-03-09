import { PetItem } from "./PetItem/PetItem";

export const Catalog = ({
    pets
}) => {
    return (
        <>
        <div id='catalog-page'>
        <h1 className="catalog-pets">Pet Accounts</h1>
            {pets.map(x=> <PetItem key={x._id} {...x} />)}
            {pets.length === 0 && (
                <h1>No pet accounts for now</h1>
            )}
        </div>
        </>
    )
}