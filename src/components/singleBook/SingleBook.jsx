import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";
import { useNavigate } from "react-router-dom";

import "./singleBook.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import BookImg from "../../assets/images/wolesoyinka.jpg";
import Spinner from "../spinner/Spinner";
import PageHeaderText from "../pageHeaderText/PageHeaderText";
import { searchBooksUnauth } from "../../Actions";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "main-modal-bg display-block" : "main-modal-bg display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <>
          <h4 className="modal-title">Oops!</h4>
          <p className="modal-text">You do not have access to this book</p>
        </>

        <hr />
        <button className="modal-btn" onClick={handleClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

const SingleBook = ({ datas, searchBar, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [spinnerHide, setSpinnerHide] = useState(false);
  const [show, setShow] = useState(false);
  const [childStat, setChildStat] = useState(false);
  const [emailVerifiedStatus, setEmailVertifiedStatus] = useState(false)
  const initialFormValues = {
    search: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  useEffect(() => {
    setTimeout(() => {
      setSpinnerHide(true);
    }, 3000);

    const userDataRegister = JSON.parse(localStorage.getItem("userRegData"));
    const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));

    let childStatus =
      userDataRegister !== null
        ? userDataRegister.user.child
        : userDataLogin !== null
        ? userDataLogin.user.child
        : "";

    setChildStat(childStatus);


    if(userDataRegister !== null){
      if (userDataRegister.user.email_verified_at) {
        setEmailVertifiedStatus(true)
      }
      else{

      }
    }

    if(userDataLogin !== null){
      if (userDataLogin.user.email_verified_at) {
        setEmailVertifiedStatus(true)
      }
      else{

      }
    }


   

    return () => {
      setSpinnerHide(false);
    };
  }, [dispatch]);

  const searchTextHandler = (e) => {
    if (e) {
      let searchValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        search: searchValue,
      });
    } else {
      setFormValues({
        ...formValues,
        search: "",
      });
    }
  };

  const handleSearch = () => {
    if (formValues.search !== "") {
      dispatch(
        searchBooksUnauth({
          search: formValues.search,
        })
      );

      setFormValues({ ...initialFormValues });
    } else {
      toastr.warning("Search Book", "Please enter a search term");
    }
  };

  // function getYearDiffWithMonth(startDate, endDate) {
  //   const ms = endDate.getTime() - startDate.getTime();

  //   const date = new Date(ms);

  //   return Math.abs(date.getUTCFullYear() - 1970);
  // }

  const handleBookNavigate = (id) => {

    
    if (
      childStat &&
      (title === "Trending Books" || title === "New Releases Books" || title === "Classic Books")
    ) {
      setShow(true);
    } else {
      if(emailVerifiedStatus){
        navigate(`/home/books/${id}`);
      }
      else{
          navigate("/verify")
      }
      //uncomment the ccode below window.location.reload() to prevent the previously 
      //viewed book from showing when a new book is clicked
      // window.location.reload(); 
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSeeAll = () => {

    if (title === "Trending Books") {
      navigate("/home/trending")
    } else if(title === "New Releases Books") {

      navigate("/home/newReleases")
      
    }
    else if(title === "Classic Books"){
      navigate("/home/classics")
    }

    else if(title === "Educational & Kiddies Books"){
      navigate("/home/childrenscorner")
    }
    else if(title === "Author's Book"){
      navigate("/home/discover")
    }
    else{

    }
  }

  return (
    <div className="lib-book-gallery">
      <div className="lib-book-gallery-text">
        <PageHeaderText text={title} />
        {searchBar === true ? (
          <div className="growing-search">
            <div className="input">
              <input
                type="text"
                name="search"
                placeholder="search for a book"
                onChange={(e) => searchTextHandler(e)}
                value={formValues.search}
              />
            </div>
            <div className="submit">
              <button type="submit" onClick={() => handleSearch()}>
                Search
              </button>
            </div>
          </div>
        ) : searchBar === false ? (
          <p
            
            className="see-all-text"
            onClick={handleSeeAll}
          >
            See All
          </p>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          childStat &&
          (title === "Trending Books" ||
            title === "New Releases Books" ||
            title === "Classic Books")
            ? "lib-book-gallery-wrapper-opacity"
            : "lib-book-gallery-wrapper"
        }
      >
        <div className="lib-book-gallery-inner-wrapper-two">
          {datas.length !== 0 ? (
            datas.map((data) => {
              return (
                <div
                  className="lib-gallery-box"
                  onClick={() => handleBookNavigate(data.id)}
                  key={data.id}
                >
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
              );
            })
          ) : (
            <Spinner spinnerHide={spinnerHide} />
          )}
        </div>
      </div>
      <Modal handleClose={handleClose} show={show} />
    </div>
  );
};

export default SingleBook;
