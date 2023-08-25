import { React, useEffect, useState } from 'react';
import "./Search.scss";

const Search = ({onChangeText = () => {}}) => {

    return (
        <div className='search-jungle'>
            <input type="text" placeholder='Buscar' onChange={(e)=> { onChangeText(e.target.value)} } />
            <span className='icon-search'>
                <img src={require('../../assets/img/icon-search.png')} alt="" />
            </span>
        </div>
    );
}

export default Search;
