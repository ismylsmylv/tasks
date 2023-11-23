import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import './App.css'
function App() {
  // const [temp, settemp] = useState(0);
  // const [wind, setwind] = useState(0);
  const [name, setname] = useState("");
  const [data, setdata] = useState({});
  // const [feels, setfeels] = useState(0);
  // const [search, setsearch] = useState(false);

  return (

    <>
      <input type="text" onChange={(e) => {
        setname(e.target.value)
      }} />
      <button onClick={() => {
        // setsearch(true)
        // console.log(city)
        axios(`https://api.github.com/users/${name}`).then(res => {
          // console.log(res.data.main.temp)
          console.log(res.data)
          setdata(res.data)
        })

      }}>Search</button>
      <br />
      {data.name && <Card maxW='sm'>
        <CardBody>

          <Stack mt='6' spacing='3'>
            <Heading size='md'>{data.name}</Heading>
            <img src={data?.avatar_url} alt="" />
            <Text>
              {data?.bio}
            </Text>
            <Text>
              {/* Feels like {feels} degrees Celsius */}
            </Text>
            <Text>
              {/* Wind speed is {wind} meters per second */}
            </Text>
          </Stack>
        </CardBody>

      </Card>}
    </>
  )
}

export default App
