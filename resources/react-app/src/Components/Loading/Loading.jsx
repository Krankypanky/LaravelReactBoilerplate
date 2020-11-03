import React from "react";
import "./Loading.scss";
import PropTypes from "prop-types";

function Loading(props) {

    const { 
        loading, 
        alternativeText 
    } = props;

    // let defaultText = "Die Bücherliste lädt gerade...";
    // if(alternativeText){
    //     defaultText = alternativeText
    // }

    if(!loading){
        return null;
    }

    return (
        <div className="Loading">
            {alternativeText}
        </div>
    )
}

Loading.propTypes = {
    loading: PropTypes.bool.isRequired,
    alternativeText: PropTypes.string
}

// wird herangenommen wenn die property nicht übergeben wurde
Loading.defaultProps = {
    alternativeText: "Die Bücherliste lädt gerade..."
}

export default Loading;

// return multiple tags at once
// <React.Fragment>
//             <div>

//             </div>
//             <div>
                
//             </div>
// </React.Fragment>

// ===

// <>
//             <div>

//             </div>
//             <div>
                
//             </div>
// </>