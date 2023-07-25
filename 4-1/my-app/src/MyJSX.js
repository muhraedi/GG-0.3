const username = 'Generasi Gigih';

const header = <h1>Hello, {username}</h1>;

const user = {
    name: 'Generasi Gigih',
    imageUrl: 'https://i.imgur.com/abcd.jpg',
    imageSize: 90,
};

const jsxExample = <h1>Hello, {user.name}! </h1>

export default function AboutPage() {
    return (
        <>
            {header}
            {jsxExample}
            <img
                src={user.imageUrl}
                alt={user.imageSize}
            />
            <h1>About</h1>
            <p>Hello there.<br />How are you doing?</p>
        </>
    )
}