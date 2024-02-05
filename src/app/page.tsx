"use client";

import { MainPage } from '@/components/main-page';
import React, {useEffect, useState} from 'react'


export default function Home() {
  const [message, setMessage] = useState("Loading");
  const [objectList, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then(res => res.json()) // convert data to json
      .then((data) =>  {
        setMessage(data.message);
        setList(data.objects);
      })
  }, []);

  return(
    <MainPage></MainPage>
  )
}
