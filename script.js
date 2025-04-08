// Function to open the popup
function openPopup() {
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popup-image");
    const mainImg = document.querySelector(".center-image");
  
    popupImg.src = mainImg.src;
    popup.style.display = "flex";
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById("imagePopup");
    popup.style.display = "none";
  }
  