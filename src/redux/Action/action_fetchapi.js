import axios from 'axios';

const fetchAll = (type, dispatch) => {
    dispatch({type:type.toUpperCase()+'_UPDATING'});
    let url = 'https://swapi.co/api/'+ (type == 'species'  || type == 'people'? type: type+'s') +'/',
    totalPages = 0;

    axios.get(url).then((resp) => {
        const promises = [];
        totalPages = Math.ceil(resp.data.count / resp.data.results.length);
        for(let i = totalPages; i > 0; i--) {
            promises.unshift(axios.get(url+'?page='+i));
        }
        axios.all(promises).then((responses) => {
            let processedResponses = [];
            responses.map(response => {
                response.data.results.map((item) => {
                    processedResponses.push(item);
                })
            })
            dispatch({type:type.toUpperCase()+'_UPDATED', payload:processedResponses});
        }).catch(() => {
            dispatch({type:type.toUpperCase()+'_UPDATE_FAILED'});
        })
    })
}

export function RequestFetchApi() {
    return dispatch => {
        let dataNames = [
            "film",
            "people",
            "planet",
            "species",
            "vehicle"
        ]

        dataNames.map( (data) => {
            fetchAll(data,dispatch);
        });
    }
}
