import { useState } from 'react';

function ShoesBlock({ shoes, price, imageUrl, name, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typeNames = ['man', 'female '];

  return (
    <div className="shoes-block-wrapper">
      <div className="shoes-block">
        <span>{name}</span>
        <img className="shoes-block__image" src={imageUrl} alt="Shoes" />
        <h4 className="shoes-block__title">{shoes}</h4>
        <div className="shoes-block__selector">
          <ul>
            {types?.map((types, index) => (
              <li
                onClick={() => setActiveType(types)}
                className={activeType === index ? 'active' : ''}
                key={index}
              >
                {typeNames[types]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes?.map((size, i) => (
              <li
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? 'active' : ''}
                key={i}
              >
                {size}cm
              </li>
            ))}
          </ul>
        </div>
        <div className="shoes-block__bottom">
          <div className="shoes-block__price">{price}$</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            <i>1</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoesBlock;
