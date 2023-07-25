const user = {
    name: 'Generasi Gigih',
    imageUrl: 'https://i.imgur.com/abcd.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>Hello, {user.name}</h1>
            <img class="avatar"
                src={user.imageUrl}
                alt={user.imageSize}
            />
            <h1 style={{color:"lightcoral"}}>{user.name}</h1>
        </>
    )
}