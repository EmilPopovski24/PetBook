

export const AddPet = () => {
    return (
        <>
        <h1>Add Your Pet</h1>
            <section id ="create-page">
                <form id="create"  method="POST">
                    <label htmlFor="task-title">Name</label>
                    <input type="text" id="name" name="name" placeholder="Pet name..." />
                    <hr />
                    <label htmlFor="type-title">Type</label>
                    <input type="text" id="type" name="type" placeholder="Type..." />
                    <hr />
                    <label htmlFor="breed-title">Breed</label>
                    <input type="text" id="breed" name="breed" placeholder="Breed..." />
                    <hr />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" name="age" placeholder="Age..." />
                    <hr />
                    <label htmlFor="color">Color</label>
                    <br />
                    <input type="text" id="color" name="color" placeholder="Color..." />
                    <hr />
                    <button type="submit" className="btn btn-primary">Add Your Pet</button>
                </form>
            </section>
        </>

    )
}