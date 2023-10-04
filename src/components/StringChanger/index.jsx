import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeString } from '../../redux/slices/stringSlice';

const StringChanger = () => {

    const string = useSelector((store) => store.string);

    const dispatch = useDispatch();
  return (
    <>
        <h1>{string}</h1>
        <button onClick={() => dispatch(changeString())}>Change text!</button>
        
    </>
  )
}

export default StringChanger