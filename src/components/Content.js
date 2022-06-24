import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, selectColor } from '../redux/noteApp/notesAppSlice';
import { nanoid } from '@reduxjs/toolkit'


function Content() {
    const colors = useSelector((state) => state.notesApp.colors);
    const [color,setColor] = useState('gold');

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const addToNotes = () => {
        if(!value) return alert("Entry cannot be empty");
        dispatch(addNote({id: nanoid(), value , color}));
        setValue('');
    }
   
    const addColorBtn = (code) => {
        dispatch(selectColor(code));
        setColor(code);
    }
    
  return (
    <section>
        <div className='txtAreaDiv'>
            <textarea 
            cols='30' 
            rows='10' 
            placeholder='Enter your note here...' 
            className='txtArea' 
            value={value}
            onChange={(e) => setValue(e.target.value)}>    
            </textarea>
            <div className='btnColors'>
                <div className='colorDiv'>
                    {colors.map((color) => (
                        <button
                        key={color.id}
                        className={'color '+color.code}
                        onClick={() => addColorBtn(color.code)}
                        >
                            {color.selected ? <span>✔</span> : ""}
                        </button>
                 ))}
                </div>
                <div>
                    <button className='btnAdd' onClick={addToNotes}>
                        Add
                    </button>
                </div>
            </div>  
        </div>
    </section>
    
  )
}

export default Content;
