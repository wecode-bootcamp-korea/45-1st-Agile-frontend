import { Link } from 'react-router-dom';
import './TitleCategory.scss';
import CATEGORY from './CATEGORY';

const TitleCategory = () => {
  return (
    <div className="title-category">
      {CATEGORY.map(category => (
        <Link
          key={category.id}
          to={`/books?categoryId=${category.id}&subCategoryId=value&limit=9&orderBy=bestBooks&offset=0`}
        >
          <img src={`/images/main/${category.img}`} alt={category.name} />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default TitleCategory;
