import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/noteApp/notesAppSlice';

function ContentList() {
  const items = useSelector((state) => state.notesApp.items);
  const filtered = useSelector(state=> state.notesApp.filtered)
  const filteredNotes = items.filter(item=> item.value.includes(filtered))
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    dispatch(deleteNote(id))
  }
  return (
    <div className='contentDiv'>
      {
        filteredNotes.map((item,i) => (
          <span key={i} style={{ 
            'overflowWrap': 'break-word', 
            'backgroundColor': item.color }}>
            <p>{item.value}</p>
            <button className='btnDelete' onClick={() => handleDestroy(item.id)}>X</button>
          </span>
        ))
      }
  </div>
  )
}

export default ContentList
