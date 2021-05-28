import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFortunes } from '../actions/getFortunes';

const Fortunes = (props) => {
    const { fortunes, isFetching, error } = props;
    console.log('props', props)
    useEffect(() => {

    });

    const getFortuneHandler = () => {
        props.getFortunes();
    };

    if(error){
        return <h2>Error: {error}</h2>;
    }

    if(isFetching){
        return <h2>Fetching Your Fortune!</h2>;
    }

    return(
        <>
            <h2>Fortune: {fortune}</h2>
            <button onClick={getFortuneHandler}>Read New Fortune</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return{
        fortune: state.fortune,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getFortunes })(Fortunes);