import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseControllerUser = "api/user/";
const baseControllerServices = "api/services/";

export const getTrendingBooks = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}trending`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data.trending_books;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve trending books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};

export const getTrendingBooksUnauth = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerServices}trending`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve trending books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getAllBooks = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}all/books`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};

export const getPopularAuthors = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}popular/authors`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve authors");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};

export const getNewReleases = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}new/release`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};

export const getClassicBooks = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}classic`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};

export const getKiddiesBook = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}educational`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};

export const getAllGenre = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}categories`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve genre");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};

export const getBooksByGenre = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}categories/books/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};




export const getAllBookNames = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}all/books/name`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book names");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};



export const getBooksByAuthor = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}authors/books/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};



export const getAllAuthors = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}all/authors`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve authors");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};




export const getBookDetails = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}book/details/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};



export const addFav = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}book/favorite/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Book Added to Favourite Successfully", "success");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not add book to favourite");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};



export const removeFav = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}book/unfavorite/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Book Removed from Favourite Successfully", "success");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not remove book from favourite");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};



export const getAuthorById = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`/${baseControllerUser}author/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not add book to favourite");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please Ensure youre logged in");
    }
  }
};