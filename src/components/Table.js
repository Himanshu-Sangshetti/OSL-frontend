import axios from 'axios';
import React from 'react';

const Table = (probs) => {
  let data = probs.data;
  let category = probs.category;
  console.log(data);


  const showPdf = (file) => {
    window.open(`http://18.232.176.102:3000/files/${file}`, "_blank", "noreferrer");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://18.232.176.102:3000/api/assignment/deleteAssignment/${id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              {
                category == "Assignments" ? (<th>Editor</th>) : ("")
              }
              <th>Video</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data._id}>
              <td>{data.title}</td>
              <td>{data.category}</td>
              {
                category == "Assignments" ? (<td>{data.editor}</td>) : (null)
              }
              <td>{data.video}</td>
              <td>
                <button onClick={() => showPdf(encodeURIComponent(data.file))}>Show Pdf</button>
                <button onClick={() => handleDelete(data._id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Table
