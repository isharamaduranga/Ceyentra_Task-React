import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>{props.name?`Welcome - ${props.name}`:"Login Please"}</h1>
        </div>
    );
}

export default Home;