import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import Types from '../../store/actions/actionTypes';
import NavigationService from '../../navigation/NavigationService';

const useNewPost = props => {
  const isInitialMount = useRef(true);

  const dispatch = useDispatch();
  const post = useSelector(state => state.postReducer?.post);
  const createRequestType = useSelector(
    state => state.postReducer?.createRequestType,
  );
  // const createErrorMessage = useSelector(
  //   state => state.postReducer?.createErrorMessage,
  // );

  const [isFetching, setIsFetching] = useState(false);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      switch (createRequestType) {
        case Types.POST_CREATE_REQUEST:
          setIsFetching(true);
          break;
        case Types.POST_CREATE_SUCCESS:
          setIsFetching(false);
          Alert.alert('New post created!', `${JSON.stringify(post)}`, [
            {
              text: 'OK',
              onPress: () => NavigationService.goBack(),
            },
          ]);
          break;
        default:
          setIsFetching(false);
          break;
      }
    }
  }, [createRequestType]);

  const onSubmitPostPressHandler = () => {
    const params = {title, description};
    dispatch({type: Types.POST_CREATE_REQUEST, params});
  };

  const onBackPressHandler = () => {
    NavigationService.goBack();
  };

  return {
    isFetching,
    title,
    description,
    setTitle,
    setDescription,
    onSubmitPostPressHandler,
    onBackPressHandler,
  };
};

export default useNewPost;
