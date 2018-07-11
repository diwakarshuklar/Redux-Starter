import dummyPeople from "./dummyPeople";

function getDummyData (dummyData: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dummyData);
        }, 1000);
    });
}

export default {
    getPeople() {
        return getDummyData(dummyPeople);
    }
};