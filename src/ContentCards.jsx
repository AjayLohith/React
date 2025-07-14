import React from "react";
import Card from "./Card";

const anime = [
  { name: "Aot", rating: 4 },
  { name: "Dandan", rating: 3 },
  { name: "LOTm", rating: 5 },
  { name: "Mob", rating: 4.2 },
  { name: "Solo", rating: 3.5 }
];
const tolly = [
  { name: "RRR", rating: 4 },
  { name: "Oggy", rating: 3 },
  { name: "Roll n0.21", rating: 5 },
  { name: "kidvcat", rating: 4.2 },
  { name: "Solo", rating: 3.5 }
];

const ContentCards = () => {
  return (
    <div className="card-container">
      {anime && anime.length > 0 && (
        <Card
          heading="All Anime"
          text={
            <ol>
              {anime.map((item, idx) => (
                <li key={idx}>
                  {item.name}: {item.rating}
                </li>
              ))}
            </ol>
          }
        />
      )}
      {tolly && tolly.length > 0 && (
        <Card
          heading="All Movies"
          text={
            <ol>
              {tolly.map((item, idx) => (
                <li key={idx}>
                  {item.name } 
                  : {item.rating}
                </li>
              ))}
            </ol>
          }
        />
      )}
    </div>
  );
};

export default ContentCards;
