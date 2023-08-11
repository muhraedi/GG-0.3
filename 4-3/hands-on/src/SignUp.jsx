export default function Signup() {
    return (
        <>
            <h1>Prevent Default</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Submitting!");
                }}
            >
                <input />
                <button>Send</button>
            </form>
        </>
    );
}