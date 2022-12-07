import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PostItem from '../../components/PostItem';
import ModalLoader from '../../components/ModalLoader';
import useHomeScreen from './hook';
import styles from './styles';

function HomeScreen(props) {
  const {isFetching, data, onRefreshPressHandler} = useHomeScreen(props);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyView}>
        <Text>Tap "Refresh" to load posts</Text>
      </View>
    );
  };

  const renderItem = item => {
    return <PostItem item={item} />;
  };

  const renderItemSeparator = () => {
    return <View style={styles.spacer} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsView}>
        <TouchableOpacity onPress={onRefreshPressHandler}>
          <Text style={styles.buttonLabel}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonLabel}>New Post</Text>
        </TouchableOpacity>
      </View>
      {data ? (
        <FlatList
          style={styles.flatList}
          data={data}
          contentContainerStyle={styles.contentContainer}
          renderItem={renderItem}
          ItemSeparatorComponent={renderItemSeparator}
        />
      ) : (
        renderEmpty()
      )}
      {isFetching && <ModalLoader />}
    </SafeAreaView>
  );
}

export default HomeScreen;
