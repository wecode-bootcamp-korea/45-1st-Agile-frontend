import { Link } from 'react-router-dom';
import './TitleCategory.scss';
import CATEGORY from './CATEGORY';

const TitleCategory = () => {
  return (
    <div className="title-category">
      {CATEGORY.map(category => (
        <Link
          key={category.subCategory_id}
          to={`/books?categoryId=${category.category_id}&subCategoryId=${category.subCategory_id}&limit=9&orderBy=bestBooks&offset=0`}
        >
          <img src={`/images/main/${category.img}`} alt={category.sub_name} />
          <p>{category.sub_name}</p>
        </Link>
      ))}
    </div>
  );
};

export default TitleCategory;
