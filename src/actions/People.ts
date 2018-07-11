import { FETCH_PEOPLE_SUCCESS, FETCHING_PEOPLE, TOGGLE_OVER_18 } from "../constants";
import { DemoService } from "../services";

export const fetchPeople = () => {
    return async (dispatchEvent) => {
        dispatchEvent({ type: FETCHING_PEOPLE });
        const people = await DemoService.getPeople();
        dispatchEvent({ type: FETCH_PEOPLE_SUCCESS, payload: people });
    }
};

export const toggleOver18 = () => ({
    type: TOGGLE_OVER_18
});