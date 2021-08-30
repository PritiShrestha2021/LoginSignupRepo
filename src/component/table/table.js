import React from 'react';
import './table.css';

function Table(props) {
    console.log(props.data, 'data');
    console.log(props.value);
    return (
        <div className="container mt-5 table-responsive">
            <table className="table  table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.address}</td>
                            <td>{item.phoneno}</td>
                            <td>
                                {new Date(item.updatedAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
