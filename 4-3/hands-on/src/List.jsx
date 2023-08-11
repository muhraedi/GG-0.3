/* eslint-disable react/jsx-key */
const fruits = [
    'Mango: Yellow',
    'Apple: Red',
    'Avocado: Green',
    'Grape: Purple',
    'Banana: Yellow'
];

export default function List() {
    const listItems = fruits.map(fruit =>
        <li>{fruit}</li>
    );
    return <ul>{listItems}</ul>
}