import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./singleBook.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import BookImg from "../../assets/images/wolesoyinka.jpg";
import Spinner from "../spinner/Spinner";
import PageHeaderText from "../pageHeaderText/PageHeaderText";

const SingleBook = ({ datas, searchBar, title }) => {

  const dispatch = useDispatch();


  const [spinnerHide, setSpinnerHide] = useState(false)

  useEffect(() => {
    
    setTimeout(() => {
      setSpinnerHide(true)
    }, 3000)

    return () => {
      setSpinnerHide(false)
    }

  }, [dispatch])


  
  


  return (
    <div className="lib-book-gallery">
      <div className="lib-book-gallery-text">
        <PageHeaderText text={title} />
        {searchBar === true ? (
          <div className="growing-search">
            <div className="input">
              <input type="text" name="search" placeholder="search for a book" />
            </div>
            <div className="submit">
              <button type="submit">Search</button>
            </div>
          </div>
        ) : searchBar === false ? (
          <a
            href={
              title === "Trending Books"
                ? "/home/trending"
                : title === "New Releases Books"
                ? "/home/newReleases"
                : title === "Classic Books"
                ? "/home/classics"
                : title === "Educational & Kiddies Books"
                ? "/home/childrenscorner"
                : title === "Author's Book" ? "/home/discover"
                :""
            }
            className="see-all-text"
          >
            See All
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="lib-book-gallery-wrapper">
        <div className="lib-book-gallery-inner-wrapper-two">
          {datas.length !== 0 ? (
            datas.map((data) => {
              return (
                <a href={`/home/books/${data.id}`} key={data.id ? data.id : ""}>

                  <div className="lib-gallery-box">
                    <div className="img-div">
                      <LazyLoadImage
                        effect="blur"
                        src={data.image_data ? data.image_data : ""}
                        alt={data.name ? data.name : ""}
                      />
                    </div>
                  
                    <p className="lib-gallery-box-author">{data.author ? data.author.name : ""}</p>
                    <h1 className="lib-gallery-box-book-name">{data.name ? data.name : ""}</h1>
                  </div>

                </a>
               
              );
            })
          ) : (
            <Spinner  spinnerHide = {spinnerHide} />   
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
