import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const detail = details?.find((item) => item._id === JSON.parse(id));
  console.log(detail);
  return (
    <div className=" lg:mx-12 my-12 mx-2">
      <div className="grid lg:grid-cols-2  lg:gap-10">
        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={detail?.img2} className="w-full" alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={detail?.img3} className="w-full" alt="pic" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={detail?.img4} className="w-full" alt="pic" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={detail?.img5} className="w-full" alt="pic" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12">
          <p>
            <span className="font-bold my-2 text-xl">Technology Used: </span>
            <span className="text-xl">{detail?.technology}</span>
          </p>
            <h1 className="font-bold mt-2 text-2xl">Description:</h1>
            <p
              className="font-bold mt-2 text-xl"
              dangerouslySetInnerHTML={{ __html: detail?.text }}
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl mt-3 lg:my-0 lg:mb-5">
            {detail?.name}
          </h1>
          
          <h1 className="font-semibold text-xl">
            Live Link:
            <a
              class="link link-hover p-3  text-purple-700"
              target="_blank"
              href={detail?.livesite}
            >
              {detail?.livesite}
            </a>
          </h1>
          <h1 className="font-semibold text-xl my-5">
            Github Code Front-end:
            <a
              class="link link-hover p-3  text-purple-700"
              target="_blank"
              href={detail?.gitclint}
            >
              {detail?.gitclint}
            </a>
          </h1>
          <h1 className="font-semibold text-xl">
            Github code Back-end Link:
            <a
              class="link link-hover p-3 text-purple-700"
              target="_blank"
              href={detail?.gitserver}
            >
              {detail?.gitserver}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
