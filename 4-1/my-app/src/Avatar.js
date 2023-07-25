const user = {
    name: 'Maria Sklodowska-Curie',
    imageUrl: 'https://i.imgur.com/B341LU3.jpeg'
};

export default function Avatar() {
    return (
        <>
        <div class="container">
            <header>
                <h1>{user.name}</h1>
            </header>
            <img
                src={user.imageUrl}
                alt={user.name}
            />
        </div>
        </>
    )
}