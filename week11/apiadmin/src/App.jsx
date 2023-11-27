import { useEffect, useState } from 'react';
import './App.css'
import { Table, Button, Modal } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2'

// table
function App() {
  const [datas, setdatas] = useState([]);
  const [inpName, setinpName] = useState("");
  const [inpPer, setinpPer] = useState(0);
  const [inpPrice, setinpPrice] = useState(0);
  const [inpStock, setinpStock] = useState(0);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [newInp, setnewInp] = useState("");
  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };
  const handleOkEdit = (record) => {
    axios.patch('https://northwind.vercel.app/api/products/' + record.id, {
      name: newInp,
    })
    setIsModalOpenEdit(false);
  };
  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then(res => {
      setdatas(res.data)
    })
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Delete",
      dataIndex: '',
      key: 'x',
      render: (record, value) => {
        const dataId = record.id;
        // console.log(dataId);
        return (
          <Button onClick={() => deleter(record)} type="primary" danger>
            Delete
          </Button>
        );
      },

    },

    // edit
    {
      title: "Edit",
      dataIndex: '',
      key: 'x',
      render: (record, value) => <>
        <Button type="primary " onClick={showModalEdit}>
          Edit
        </Button>
        <Modal title="Basic Modal" open={isModalOpenEdit} onOk={handleOkEdit(record)} onCancel={handleCancelEdit}>
          <input type="text" name="" id="" value={record.name} onChange={(e) => {
            setnewInp(e)
            value = record.name

          }} />
          {
            console.log(record.name)
          }
        </Modal>


      </>


    }

  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  // delete
  const deleter = (record) => {
    // console.log(e.id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        axios.delete("https://northwind.vercel.app/api/products/" + record.id)

        axios("https://northwind.vercel.app/api/products/").then(res => {
          setdatas(res.data)
        })

      }
    });
  }

  //edit
  const editer = (e) => {

  }






  // add
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    let obj = {
      "name": inpName,
      "quantityPerUnit": inpPer,
      "unitPrice": inpPrice,
      "unitsInStock": inpStock
    }
    console.log(obj)
    axios.post("https://northwind.vercel.app/api/products", obj)
    axios.get("https://northwind.vercel.app/api/products/").then(res => {
      setdatas(res.data)
    })

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  // edit 

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='modal'>
        <div className="inputs" style={{ display: 'flex', flexDirection: "column" }}>
          <input type="text" placeholder='name' onChange={(e) => {
            setinpName(e.target.value)
          }} />
          <input type="number" placeholder='quantityPerUnit' onChange={(e) => {
            setinpPer(e.target.value)
          }} />
          <input type="number" placeholder='unitPrice' onChange={(e) => {
            setinpPrice(e.target.value)
          }} />
          <input type="number" placeholder='unitsInStock' onChange={(e) => {
            setinpStock(e.target.value)
          }} />
        </div>
      </Modal>
      <Table columns={columns} dataSource={datas} onChange={onChange} />;


    </>
  )
}

export default App
