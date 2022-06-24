import React from 'react'
import { searchNote } from '../redux/noteApp/notesAppSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();

  const search = (e) => {
      dispatch(searchNote(e.target.value)); 
  }
  return (
       <div className="header">
        <h1>NotesApp</h1>
        <input 
        className='note-app' 
        placeholder='Search...'
        
        onChange={search}
        />
      </div>
  )
}

export default Header
