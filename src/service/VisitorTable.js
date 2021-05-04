import React from 'react';
import {DataTable} from '@edx/paragon';

const VisitorTable = ({ visitor }) => {
    return (
    <DataTable
        data={ visitor }
        columns={[
            {
                Header: 'Firstname',
                accessor: 'firstname',
            },
            {
                Header: 'Lastname',
                accessor: 'lastname',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Comment',
                accessor: 'comment',
            }
        ]}
        itemCount={visitor.length}
        isPaginated
        isSortable
        initialState={{
            pageSize: 10,
            pageIndex: 0
          }}     
    />    
   )
}

export default VisitorTable;