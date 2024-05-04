import { PetItem } from "./PetItem/PetItem";
import './Catalog.css';
import { usePetContext } from "../../contexts/PetContext";

export const Catalog = () => {

    const { pets } = usePetContext();

    return (
        <>
            {pets.length > 0 && (
                <h1 className="catalog-pets">Pets</h1>
            )}
            <div id='catalog-page'>
                {pets.map(x=> <PetItem key={x._id} {...x} />)}
            </div>
            {pets.length === 0 && (
                <h1 className="catalog-pets">No pet accounts for now</h1>
            )}
        </>
    )
}