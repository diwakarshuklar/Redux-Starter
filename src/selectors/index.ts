export function filterOver18 (state:any) {
    const { people, checked } = state;
    const newPeople = checked ? people.filter((p:any) => p.age > 18 ): people;
    return { ...state, people: newPeople };
}