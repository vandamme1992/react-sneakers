function Categories({ value, onChangeCategory }) {
  const categories = [
    'All',
    'Road',
    'Trail & Hiking',
    'Treadmill & Gym',
    'Racing',
    'Walking',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
