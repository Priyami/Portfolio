import React from 'react';
import './CustomTable.css';

const CustomTable = (...visitor) => {

    return (
        <div className="container">
            <table>
                <tbody>
                    {visitor[0].visitor.map(patron =>
                       <tr key={patron?.serverkey}>
                           <td>{patron?.comment}</td> <td className="visitor-name"> - {patron?.firstname } {patron?.lastname} </td>
                       </tr>

                     )}
                </tbody>
            </table>
        </div>
    )
}
export default CustomTable;