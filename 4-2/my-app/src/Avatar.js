function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

function Avatar({ person, size = 100}) {
    return (
        <div className="container">
            <header>
                <h1>{person.name}</h1>
            </header>
            <img
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </div>
    )
}

export default function Profile() {
    return(
        <>
            <Avatar
                size={100}
                person={{
                    name: 'Maria Sklodowska-Curie',
                    imageId: 'B341LU3'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </>
    )
}