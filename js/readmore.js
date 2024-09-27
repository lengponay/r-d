
function toggleText() {
  var shortText = document.getElementById("short-text");
  var fullText = document.getElementById("full-text");
  var readMoreLink = document.getElementById("read-more");
  
  if (fullText.style.display === "none") {
    fullText.style.display = "inline";
    readMoreLink.innerHTML = "Read Less";
  } else {
    fullText.style.display = "none";
    readMoreLink.innerHTML = "Read More";
  }
}

