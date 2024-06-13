window.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.pexels.com/v1/search?query=carrots", {
    headers: {
      Authorization: "fvW6mDQ96XzKtkykCMhPxNOcLw10mFPIppGvFAWeQJNWIHMvMKGg2scQ",
    },
  }).then((responseObj) => {
    console.log("response object", responseObj);
    if (responseObj.ok) {
      return responseObj.json;
    } else {
      throw new Error("Errore nel reperimento dei dati");
    }
  });
});
