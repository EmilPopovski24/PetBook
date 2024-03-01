

export const AddPet = () => {
    return (
        <>
        <h1>Add Your Pet</h1>
            <section id ="create-page">
                <form id="create"  method="POST">
                    <label htmlFor="task-title">Name</label>
                    <input type="text" id="name" name="name" placeholder="Pet name..." />
                    <hr />
                    <label htmlFor="task-title">Type</label>
                    <input type="text" id="type" name="type" placeholder="Type..." />
                    <hr />
                    <label htmlFor="task-title">Breed</label>
                    <input type="text" id="title" name="title" placeholder="Task name..." />
                    <hr />
                    <label htmlFor="task-descrition">Age</label>
                    <input type="text" id="description" name="description" placeholder="Task description..." />
                    <hr />
                    <label htmlFor="task-date">Color</label>
                    <br />
                    <input type="date" id="date" name="date" placeholder="Task name..." />
                    <hr />
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </section>
        </>

    )
}