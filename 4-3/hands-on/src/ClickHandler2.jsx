/* eslint-disable react/prop-types */
function Button({ onClick, children }) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div
            className="Toolbar"
            onClick={() => {
                alert("You clicked on the toolbar!");
            }}
        >
            <h1>Stopping propagation</h1>
            <Button onClick={() => alert("Playing!")}>Play Movie</Button>
            <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
        </div>
    );
}