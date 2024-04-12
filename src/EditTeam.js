import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { SportNavBar, UIEditTeam } from "./ui-components";
import {Storage } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import "./App.css";
import { getTeam } from "./graphql/queries";
function EditTeam() {
  return <Put />;
}

function Put() {
  const client = generateClient();
  const { cid } = useParams();
  const [cr, setMe] = useState({});
useEffect(() => {
    const queryData = async () => {
      const record = cid
        ? (
            await client.graphql({
              query: getTeam.replaceAll("__typename", ""),
              variables: { id: cid },
            })
          )?.data?.getTeam
        : cr;
        if (record.image) {
          record.filename = record.image
          const url = await Storage.get(record.image);
          record.image = url;
          }
        setMe(record);
    };
    queryData();
  }, [cid, cr]);



  return (
    <div>
      <header className="App-header">
        <SportNavBar />
        <UIEditTeam nx={cr} />
      </header>
    </div>
  );
}

export default EditTeam;