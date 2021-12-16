import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ articles }) => {
  return articles.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li className={styles.ImageGalleryItem} key={id} a={largeImageURL}>
        <img
          className={styles.ImageGalleryItemimage}
          src={webformatURL}
          alt=""
        />
      </li>
    );
  });
};
export default ImageGalleryItem;
