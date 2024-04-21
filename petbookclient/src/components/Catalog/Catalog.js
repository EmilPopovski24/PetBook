import { PetItem } from "./PetItem/PetItem";
import './Catalog.css';

export const Catalog = ({
    pets
}) => {

    console.log(pets)
    return (
        <>
        
            {pets.length > 0 && (
                <h1 className="catalog-pets">Pets</h1>
            )}
            <div id='catalog-page'>
            {pets.map(x=> <PetItem key={x._id} {...x} />)}
            {pets.length === 0 && (
                <h1 className="catalog-pets">No pet accounts for now</h1>
            )}
        </div>
        </>
    )
}