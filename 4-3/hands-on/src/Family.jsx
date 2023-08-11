/* eslint-disable react/jsx-key */
const family = [{
    id: 0,
    name: 'Papa Shark',
    gender: 'male',
}, {
    id: 1,
    name: 'Mama Shark',
    gender: 'female',
}, {
    id: 2,
    name: 'Teenager Shark',
    gender: 'male',
}, {
    name: 'Baby Shark',
    gender: 'female',
}]

export function ListFemale() {
    const femaleMembers = family.filter(member =>
        member.gender === 'female'
    );
    const listItems = femaleMembers.map(member =>
        <li>
            {member.name}
        </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export function ListMember() {
    const listItems = family.map((member) => (
        <li key={member.id}>{member.name}</li>
    ))
    return (
        <ul>{listItems}</ul>
    );
}