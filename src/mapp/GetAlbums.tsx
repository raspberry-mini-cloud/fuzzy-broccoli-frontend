function GetAlbums() {
  const headers: Headers = new Headers();
  // Add a few headers
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");

  // Create the request object, which will be a RequestInfo type.
  // Here, we will pass in the URL as well as the options object as parameters.
  const request: RequestInfo = new Request("http://127.0.0.1:5000/albums", {
    method: "GET",
    headers: headers,
  });

  fetch(request)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok " + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // You can update the state or do something with the data here
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  return <div></div>;
}

export default GetAlbums;
