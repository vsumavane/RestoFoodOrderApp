import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Magnifier } from 'react-image-magnifiers';

const slideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px', // Adjust height as needed
  backgroundColor: '#eee', // Default background color
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};

const SlidingPhotos = ({ photos }) => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {photos.map((photo, index) => (
        <div key={index} style={slideStyle}>
          <Magnifier
            imageSrc={photo}
            imageAlt={`Photo ${index + 1}`}
            style={imageStyle}
          />
        </div>
      ))}
    </Carousel>
  );
}

function HomePage() {
  const photos = ["url1.jpg", "url2.jpg", "url3.jpg"]; // Sample photo URLs
  return (
    <div>
      {/* Food Image Slider */}
      <SlidingPhotos photos={photos} />

      {/* Order Food Button */}
      {/* Reservation */}
    </div>
  );
}

export default HomePage;
