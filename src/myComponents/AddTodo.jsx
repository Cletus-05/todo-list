import React, { useState } from 'react';

const AddTodo = () => {
     const submit= ()=>{
        const [title, setTitle] = useState("");
        const [desc, setdesc] = useState("");
    }
    
  return (
    <div classNameName="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
          type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            />
         
            
        </div>
        <div className="mb-3">
          <label htmFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo
