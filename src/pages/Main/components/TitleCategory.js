import { Link } from 'react-router-dom';
import CATEGORY from './CATEGORY';
import './TitleCategory.scss';

const TitleCategory = () => {
  return (
    <div className="title-category">
      {CATEGORY.map(category => (
        <Link
          className="icons"
          key={category.subCategory_id}
          to={`/productlist?categoryId=${category.category_id}&subCategoryId=${category.subCategory_id}&limit=9&orderBy=&offset=0`}
        >
          <img src={`/images/main/${category.img}`} alt={category.sub_name} />
          <p>{category.sub_name}</p>
        </Link>
      ))}
    </div>
  );
};

export default TitleCategory;
