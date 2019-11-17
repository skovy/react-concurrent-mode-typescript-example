import React from "react";
import { Img, resource } from "react-suspense-img";

const IMAGES = [
  "https://placekitten.com/400/400",
  "https://placekitten.com/401/401",
  "https://placekitten.com/402/402",
  "https://placekitten.com/403/403",
  "https://placekitten.com/404/404",
  "https://placekitten.com/405/405",
  "https://placekitten.com/406/406",
  "https://placekitten.com/407/407",
  "https://placekitten.com/408/408",
  "https://placekitten.com/409/409"
];

const FALLBACK = (
  <div
    style={{
      display: "inline-block",
      width: 64,
      height: 64,
      backgroundColor: "#ccc"
    }}
  />
);

const App: React.FC = () => {
  return (
    <div>
      <React.SuspenseList revealOrder="forwards" tail="collapsed">
        {IMAGES.map(src => {
          resource.preloadImage(src);

          return (
            <React.Suspense fallback={FALLBACK} key={src}>
              <Img src={src} width={64} alt="Kitten" />
            </React.Suspense>
          );
        })}
      </React.SuspenseList>
    </div>
  );
};

export default App;
