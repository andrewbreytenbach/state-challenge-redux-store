import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCategories, updateCurrentCategory } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu({ categories, updateCategories, updateCurrentCategory }) {
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      updateCategories(categoryData.categories);
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        updateCategories(categories);
      });
    }
  }, [categoryData, loading, updateCategories]);

  const handleClick = (id) => {
    updateCurrentCategory(id);
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { updateCategories, updateCurrentCategory })(CategoryMenu);
