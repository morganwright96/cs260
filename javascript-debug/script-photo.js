function loadPhoto(e) {
    e.preventDefault();
    // get form values
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let grayscale = document.getElementById("grayscale").checked;
    let blur = document.getElementById("blur").checked;
    let blurAmount = document.getElementById('blurAmount').value;
    let random = Math.floor(Math.random() * 10000);

  // check if width is empty
  if (width === "") {
    width = "200";
  }
  // setup URL
    let url = "https://picsum.photos/" + width;

    // Set the height value
    if (height !== "") {
        url += "/" + height;
    }
    // get a random photo
    url += "?random=" + random;
    // add the grayscale if the value is checked
    if (grayscale) {
        url += "&grayscale"
    }
    // add the blur option
    if (blur) {
        url += "&blur=" + blurAmount;
    }
    updateImage(url);
}

function updateImage(url) {
    document.getElementById('photo').src = url;
}

document.getElementById('submit').addEventListener('click', loadPhoto);
