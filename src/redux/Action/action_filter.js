export function RequestFilterPlanet(selected, people) {
    return dispatch => {
        dispatch({type:'FILTERING'});
        console.log(selected,'selected');
        console.log('wo');
        console.log(people);

        let resultFilter = [];
        Object.keys(people).filter((key) => {
            selected.map((selectedItem) => {
                if(selectedItem == people[key].homeworld) {
                    resultFilter.push(people[key]);
                }
            })
        })
        dispatch({type:'FILTERED', payload:resultFilter});
    }
}

export function RequestFilterReset() {
    return dispatch => {
        dispatch({type:'FILTER_RESET'});
    }
}