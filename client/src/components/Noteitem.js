import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
const Noteitem = (props) => {
    const context=useContext(noteContext)
    const {deleteNote}=context;
    const { note,updateNote } = props;
    // const {showAlert}=props;
    return (
        <div className='col-md-3 noteitem'>
            <div className="card my-3">
                <div className="card-body ">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">{note.title}</h5>
                        
                        <div>
                            <i class="fa-regular fa-pen-to-square mx-1" onClick={()=>{updateNote(note)}}></i>
                            <i class="fa-solid fa-trash mx-1" onClick={()=>{deleteNote(note._id);
                                // props.showAlert("Note deleted successfully ","success");
                                // problem in Alert video...
                                // console.log(showAlert);
                            }}></i>
                        </div>
                    </div>
                    <p className="card-text carddescription">{note.description}</p>
                    <p className='card-text cardtag'>{note.tag}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
