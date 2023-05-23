import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import { shortenAddress } from '../../utils/shortenaddress';
import { DataGrid } from '@mui/x-data-grid';
import { colors } from '@mui/material';
import { TransactionContext } from '../../context/TransactionsContext';
import Web3 from 'web3';
import moment from 'moment';

// const {transactions} = useContext(TransactionContext)

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 20, 
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'sender',
    headerName: 'Sender',
    headerClassName: 'super-app-theme--header',
    width: 130,
    editable: true,
  },
  {
    field: 'receiver',
    headerName: 'Receiver',
    headerClassName: 'super-app-theme--header',
    width: 130,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    headerClassName: 'super-app-theme--header',
    width: 90,
    editable: true,
  },
  // {
  //   field: 'message',
  //   headerName: 'Message',
  //   headerClassName: 'super-app-theme--header',
  //   width: 60,
  //   editable: true,
  // },
  {
    field: 'timestamp',
    headerName: 'Timestamp',
    headerClassName: 'super-app-theme--header',
    width: 120,
    editable: true,
  },
  {
    field: 'keyword',
    headerName: 'Keyword',
    headerClassName: 'super-app-theme--header',
    width: 140,
    editable: true,
  },
];



export default function Datagrid() {
  const {transactions} = useContext(TransactionContext);
  const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/zYtlq26CXtT6c9fdA1DC9h74HSzS1t7G')
  const keys = ['id','sender', 'receiver', 'amount','message'  , 'timestamp','keyword'];

  const rows = transactions.map((list, index) => {
    return list.reduce((dict, value, index) => {
      if (keys[index + 1] === 'amount') {
        dict[keys[index + 1]] = web3.utils.fromWei(value,'ether') + ' Eth';
      } else if (keys[index + 1] === 'timestamp'){
        const date = moment.unix(value);
        dict[keys[index + 1]] = date.fromNow();
      } else if (keys[index + 1] === 'sender' || keys[index + 1] === 'receiver'){
        dict[keys[index + 1]] = shortenAddress(value);
      } else {
        dict[keys[index + 1]] = value;
      }
      // dict[keys[index + 1]] = value;
      return dict;
    }, {[keys[0]]: index + 1});
  });
  
  
  return (
    <Box sx=
    {{ height: '100%', width: '100%',  
    
    }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5]}
        
        disableRowSelectionOnClick
      />
    </Box>
  );
}