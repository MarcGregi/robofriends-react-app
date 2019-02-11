import React from 'react'; 

// render children 

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '0.4px solid white', height: '800px' }}>
            {props.children}
        </div>

    ); 
}

export default Scroll; 

