import React, { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);
  const apiUrl = `https://api.unsplash.com/search/photos?query=coffee&per_page=8&client_id=uL1dJVQXVx770eSGzwGKToA86BiaJCyRpZj7t2dE8nM`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Shuffle the array of image results
        const shuffledResults = data.results.sort(() => 0.5 - Math.random());
        // Select the first 8 images from the shuffled array
        const selectedImages = shuffledResults.slice(0, 8);
        // Map the selected images to an array of image URLs
        const imageUrls = selectedImages.map((result) => result.urls.regular);
        // Update the component state with the image URLs
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {images.map((imageUrl) => (
        <img src={imageUrl} className="w-full h-full object-cover" />
      ))}
    </div>
  );
}

export default Gallery;
