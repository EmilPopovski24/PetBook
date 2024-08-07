import { PetItem } from "./PetItem/PetItem";
import { usePetContext } from "../../contexts/PetContext";
import './Catalog.css';

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
                <h1 className="catalog-pets">No pet accounts yet</h1>
            )}
        </>
    )
}