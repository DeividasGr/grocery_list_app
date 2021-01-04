import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && editing) {
      //deal with edit
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-from" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery list</h3>
        <div className="form-control">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="grocery"
            placeholder="Enter name of product"
            value={name}
          />
          <button className="submit-btn">{editing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      <div className="grocery-section">
        <List items={list} />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
};

export default App;
