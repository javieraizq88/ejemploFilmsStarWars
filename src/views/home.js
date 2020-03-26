import React, { useContext } from 'react';
import { Context } from "..store/appContext";

const Home = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Film</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.films ?
                            store.films.results.map((film, i) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="card" key={i} >
                                            <img src="http://placehold.it/400x250" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : (

                                <div className="col-md-12 text-center">
                                    <div className="col-md-12 text-center">
                                        <div className="spinner-grow" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default Home;