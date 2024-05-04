import React from 'react'

const home= ()=> {
  return (
    <div>
      <h1>Book Details</h1>
    </div>
  )
}

export default home;


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>ISBN</th>
        <th>PageCount</th>
        <th>Authors</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
  </table>
</div>