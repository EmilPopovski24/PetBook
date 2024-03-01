

export const AddPet = () => {
    return (
        <>
        <h1>Add Your Pet</h1>
            <section id ="create-page">
                <form id="create"  method="POST">
                    <label htmlFor="task-title">Task Title</label>
                    <input type="text" id="title" name="title" placeholder="Task name..." />
                    <hr />
                    <label htmlFor="task-descrition">Description</label>
                    <input type="text" id="description" name="description" placeholder="Task description..." />
                    <hr />
                    <label htmlFor="task-date">Due Date </label>
                    <br />
                    <input type="date" id="date" name="date" placeholder="Task name..." />
                    <hr />
                    <button style={{background:"blue", border:"none"}} type="submit" className="btn btn-primary">Create</button>
                </form>
            </section>
        </>

    )
}