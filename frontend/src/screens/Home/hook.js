import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Types from '../../store/actions/actionTypes';
import NavigationService from '../../navigation/NavigationService';

const useHomeScreen = props => {
  const isInitialMount = useRef(true);

  const dispatch = useDispatch();
  const home = useSelector(state => state.postReducer?.home);
  const homeRequestType = useSelector(
    state => state.postReducer?.homeRequestType,
  );
  // const homeErrorMessage = useSelector(
  //   state => state.postReducer?.homeErrorMessage,
  // );

  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      switch (homeRequestType) {
        case Types.POST_HOME_REQUEST:
          setIsFetching(true);
          break;
        case Types.POST_HOME_SUCCESS:
          setIsFetching(false);
          setData(home);
          break;
        default:
          setIsFetching(false);
          break;
      }
    }
  }, [homeRequestType]);

  const getHome = () => {
    const params = {};
    dispatch({type: Types.POST_HOME_REQUEST, params});
  };

  const onRefreshPressHandler = () => {
    getHome();
  };

  const onNewPostPressHandler = () => {
    NavigationService.navigate('NewPost');
  };

  return {
    isFetching,
    data,
    onRefreshPressHandler,
    onNewPostPressHandler,
  };
};

export default useHomeScreen;
