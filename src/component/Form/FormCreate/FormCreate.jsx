import React, { useEffect, useState } from "react";
import "./FormCreate.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormCreate = ({ type }) => {

  
  const params = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [image, setimage] = useState(null);


  useEffect(() => {
    axios
      .get(`https://vica.website/api/items/${params.id}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      })
      .then((res) => {
        setdata(res.data);
        setname(res.data.name)
        setprice(res.data.price)
      });
  }, [type]);
  const send = (event) => {
    event.preventDefault();
    // console.log({ name: name, price: price, image: image });
    let senddata=(type)?{
      name: name,
      price: price,
      image: image,
      _method:"PUT"
    }:{
      name: name,
      price: price,
      image: image,
    }
    axios
      .post(
      (type)?`https://vica.website/api/items/${params.id}`:"https://vica.website/api/items",senddata,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      });
  };

  return (
    <form
      onSubmit={(event) => {
        send(event);
      }}
    >
      <div className="create">
        <div className="left">
          <div>
            <label>Product Name :</label>
            <input
              type="text"
              onChange={(event) => {
                setname(event.target.value);
              }}
          defaultValue={data.name}
            />
          </div>
          <div>
            <label>Price Name :</label>
            <input
              type="text"
              onChange={(event) => {
                setprice(event.target.value);
              }}
              defaultValue={data.price}
            />
          </div>
          <button>create</button>
        </div>
        <div className="right">
          <label htmlFor="image">
            {/* <img src="/assets-dash-next/icons/upload.svg" alt="" /> */}
          {(type)?<img src={data.image_url} />:<img src="/assets-dash-next/icons/upload.svg" alt="" />}
          </label>
          <input
            type="file"
            id="image"
            onChange={(event) => {
              setimage(event.target.files[0]);
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default FormCreate;
