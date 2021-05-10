import React from 'react';
import Datatable from 'react-bs-datatable';
import { css } from '@emotion/css';
const ReactTable = ({ visitor }) => {
    const header = [
        { title: 'Firstname', prop: 'firstname', sortable:true },
        { title: 'Lastname', prop: 'lastname', sortable:true },
        { title: 'Email (Filterable)', prop: 'email', filterable:true },
        { title: 'Comment', prop: 'comment' }
      ];
      const classes = {
        table: 'table-striped table-hover',
        theadCol: css`
          .table-datatable__root & {
            &.sortable:hover {
              background: pink;
            }
          }
        `,
        tbodyRow: css`
          &:nth-of-type(even) {
            background: #eaeaea;
          }
        `,
        paginationOptsFormText: css`
          &:first-of-type {
            margin-right: 8px;
          }
          &:last-of-type {
            margin-left: 8px;
          }
        `
      };
      const selectRow = {
        mode: 'checkbox',
        classes: 'custom-class'
      };
    return (
        
  <Datatable 
        tableHeaders= {header}
        tableBody = {visitor}
        rowsPerPage={5}
        rowsPerPageOption={[5, 10, 15, 20]}
        classes = {classes}
        onRowClick={selectRow}
        />
    )
}
export default ReactTable;