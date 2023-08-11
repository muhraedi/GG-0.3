function Person({ name, gender }) {
    if (gender === 'female') {
        return <h1 style={{ color: 'lightcoral' }}>{name}</h1>;
    } else if (gender === 'male') {
        return <h1 style={{ color: 'midnightblue' }}>{name}</h1>;
    } else {
        // Handle other cases, e.g., gender not specified or invalid gender
        return <h1>{name}</h1>; // You can provide a default style here if needed
    }
}

export default function People() {
    return (
        <section>
            <Person gender='female' name="Helen Keller" />
            <Person gender='female' name="Marie Curie" />
            <Person gender='male' name="Albert Einstein" />
            <Person name="Unknown Person" /> {/* Handling case with no specified gender */}
        </section>
    );
}
