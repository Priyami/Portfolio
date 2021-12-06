import React from 'react';
import './CustomTable.css';

const CustomTable = (...visitor) => {
    console.log(visitor[0].visitor[0]?.email, "customtable");


    return (

        <div className="container">
            <table>
             <tbody>
            {visitor[0].visitor.map(patron =>
                <tr key={patron?.serverkey}>
                    
                    <td>{patron?.comment} - {patron?.firstname }{ patron?.lastname} </td>
                </tr>

            )}
            </tbody>

        </table>



        </div>


    )

}
export default CustomTable;