import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dataApi, setdataApi] = useState([]);
  const [names, setnames] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers/").then(res => {
      console.log(res.data)
      setdataApi(res.data)
    })
  }, []);
  console.log(names)


  // table head starts here
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'companyName',
      sorter: (a, b) => a.companyName.localeCompare(b?.companyName),
      // sorter: (a, b) => a.name.length - b.name.length,
    }, {
      title: 'City',
      dataIndex: ['address', 'city'],
      filters: [{
        text: 'Tokyo',
        value: 'Tokyo',
      }, {
        text: 'Berlin',
        value: 'Berlin',
      },
      {
        text: 'Manchester',
        value: 'Manchester',
      }],
      filterMultiple: false,
      onFilter: (value, record) => record.address?.city?.startsWith(value)
      // sorter: dataApi.filter(elem=>{
      //   elem.address?.city ==a.address.city
      // })
      // sorter: (a, b) => a.address?.city.localeCompare(b.address?.city),
      // sorter: (a, b) => a['address', 'city'].localeCompare(b['address', 'city']),
      // sorter: (a, b) => a.address?.length - b.address?.length,
    }];



  // table body starts here

  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  return (
    <>


      <Table columns={columns} dataSource={dataApi} onChange={onChange} />


    </>
  )
}

export default App
