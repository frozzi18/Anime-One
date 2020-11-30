import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

const Jumbotron = ({ anime }) => {
  return (
    <div className="container-fluid pt-4 pb-4 background-gradient-animation">
      <div className="row">
        <div className="col-5 jumbotron-background d-flex justify-content-center">
          {anime && (
            <Card
              bordered={false}
              cover={
                <img
                  //   style={{ width: "100px" }}
                  alt="example"
                  src={anime.image_url}
                />
              }
              style={{ width: "50%" }}
              className="text-center items-center"
            >
              <Meta title={anime && anime.title} />
            </Card>
          )}
        </div>
        <div className="col-7 d-flex flex-column justify-content-center">
          <h1 className="text-light">{anime && anime.title}</h1>
          <h2 className="text-light">
            Start Date: {anime && anime.start_date}
          </h2>
          <Button type="primary" shape="round" style={{ width: "20%" }}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
