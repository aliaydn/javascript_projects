const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelector(
  ".container .seat:not(.occupied)"
);
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const movieSelectBox = document.getElementById("movie");

let currentMovieIndex = localStorage.getItem
('selectedMovieIndex') ? localStorage.getItem
('selectedMovieIndex') : movieSelectBox;

 
movieSelectBox.addEventListener("change", (e) => {
  let ticketPrice = e.target.value;
  let movieIndex = e.target.selectedIndex;
  console.log(movieIndex);
  setMovieDataLocalStorage(ticketPrice, movieIndex);
});
const setMovieDataLocalStorage = (ticketPrice, movieIndex) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", ticketPrice);
};

container.addEventListener("click", (e) => {
  console.log(e.target.classList);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    console.log(e.target.classList);
  }


  updateMovieInfo();
});

const updateMovieInfo = () => {
    let selectedSeats = document.querySelectorAll('.row .seat.selected')

    let selectedSeatsIndexArray = [...selectedSeats].map(seat => [...allSeats].indexOf(seat));

    //console.log(selectedSeatsIndexArray);

    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsIndexArray));
}
