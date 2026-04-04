
function handleFormSubmit(event){
    // event.preventDefault();
    console.log("Form was Submitted..");
}

export default function Form() {

    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder = "Enter Something" />
            <button >Submit</button>
        </form>
    );

}