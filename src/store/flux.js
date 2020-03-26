const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            films: null
        },
        actions: {
            getFilms: url => {
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            films: data
                        });
                    })
                    .catch(error =>{
                        console.log(error)
                    })
            }
        }
    }
}

export default getState;