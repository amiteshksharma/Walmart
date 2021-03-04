import React from 'react';
import MUIDataTable from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// props for the columns
const columns = [
    {
        name: "Issue Number",
        label: "Issue Number",
        options: {
            filter: true,
            sort: true,
            filterType: 'textField'
        }
    }, 
    {
        name: "Title",
        label: "Title",
        options: {
            filter: true,
            sort: true,
            filterType: 'textField'
        }    
    },
    {
        name: "State",
        label: "State",
        options: {
            filter: true,
            sort: true,
            filterType: 'dropdown'
        }         
    },
    {
        name: "User",
        label: "User",
        options: {
            filter: true,
            sort: true,
            filterType: 'textField'
        }  
    },
    {
        name: "Created At",
        label: "Created At",
        options: {
            filter: true,
            sort: true,
            filterType: 'textField'
        }     
    },
    {
        name: 'Extra Information',
        options: {
            display: false,
            viewColumns: false,
            filter: false    
        }
    }
];

const styles = {
    width: 'calc(10vw)',
    minWidth: 'calc(10vw)',
    maxWidth: 'calc(10vw)'
}

// format the data in the dropdown
const createData = ( avatar, body, update ) => {
    return { avatar, body, update };
}

/**
 * Render the dropdown row on the datatable
 * 
 * @param {Object} rowData 
 * @param {Object} rowMeta 
 */
const renderRow = (rowData, rowMeta) => {
    if(!rowData) return;
    const rows = []
    let obj = rowData[5];
    rows.push(createData(obj[2], obj[0], obj[1]))

    return (
        <React.Fragment>
          <TableRow>
            <TableCell style={{ padding: 0 }} colSpan={9}>
              <TableContainer>
                <Table aria-label="simple table">
                {/* The dropdown header */}
                  <TableHead>
                    <TableRow style={{border: 'none'}}>
                      <TableCell></TableCell>
                      <TableCell id="table-cell-avatar">Avatar</TableCell>
                      <TableCell id="table-cell-body">Body</TableCell>
                      <TableCell id="table-cell-update">Updated Last</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {/* The dropdown row data */}
                    {rows.map((row, ind) => (
                      <TableRow key={ind}>
                        <TableCell></TableCell>
                        <TableCell style={{width: '15.8%'}}><img src={row.avatar} height={60} width={60} alt="Avatar" /></TableCell>
                        <TableCell style={{width: '52%'}}><p styling={styles}>{row.body}</p></TableCell>
                        <TableCell style={{width: '28.6%'}}><p>{row.update}</p></TableCell>                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TableCell>
          </TableRow>
        </React.Fragment>       
    )
}

// options for the datatable
const options = {
    filterType: 'textField',
    expandableRows: true,
    expandableRowsOnClick: true,
    renderExpandableRow: renderRow,
    rowsPerPageOptions: [5, 10, 25],
};

export default function TableData(props) {
    const data = props.data; 

    return (
        <MUIDataTable
            title={"Github Issues Table"}
            data={data}
            columns={columns}
            options={options}
        />   
    )
}