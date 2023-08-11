/* eslint-disable react/prop-types */
function AlertButton({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
}

function handlePlay() {
    alert("Playing!");
}

function handleUpload() {
    alert("Uploading");
}

export default function Toolbar() {
    return (
        <div>
            <h1>Pass handler function as props</h1>
            <AlertButton onClick={handlePlay}>Play Movie</AlertButton>{" "}
            <AlertButton onClick={handleUpload}>Upload Image</AlertButton>{" "}
        </div>
    );
}