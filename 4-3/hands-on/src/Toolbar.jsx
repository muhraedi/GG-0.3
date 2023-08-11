/* eslint-disable react/prop-types */
function AlertButton({ message, children }) {
    return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
    return (
        <div>
            <h1>Pass handler function as props</h1>
            <AlertButton message="Playing!">Play Movie</AlertButton>
            <AlertButton message="Uploading!">Upload Image</AlertButton>
        </div>
    );
}