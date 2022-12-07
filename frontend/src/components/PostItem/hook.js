const usePostItem = props => {
  const {item} = props;
  const index = item.index;
  const {title, description} = item.item;

  return {index, title, description};
};

export default usePostItem;
