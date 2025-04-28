import { useState } from "react";
import "./Rating.css";

const ratingList = [
  "https://www.clipartmax.com/png/middle/448-4489878_1-out-of-5-stars-1-star-rating-png.png",
  "https://img.freepik.com/premium-vector/funny-cute-happy-2-star-characters-bundle-se_464314-3219.jpg?w=1380",
  "https://sun9-28.userapi.com/impf/c855436/v855436801/d69a5/8TdLk-8oMHA.jpg?size=1161x913&quality=96&sign=fc8537d8437b1421872208ca5e29fc8a&c_uniq_tag=3sdCGa_KUxOtSRVS5RNDFGr77OoKVRi8MwqGagANG1E&type=album",
  "https://banner2.kisspng.com/20181128/uct/kisspng-galatasaray-s-k-dream-league-soccer-uefa-champion-yldz-clipart-ourclipart-5bff31fccd2c99.8288298815434511328404.jpg"
];

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating-container">
      <img src={ratingList[ratingValue]} alt="Рейтинг" className="rating-image" />
      <div className="buttons-container">
        {['Плохо', 'Приемлемо', 'Хорошо', 'Отлично'].map((label, index) => (
          <button key={index} onClick={() => setRatingValue(index)} className="rating-button">
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;