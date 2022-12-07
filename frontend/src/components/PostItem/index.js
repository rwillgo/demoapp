import React from 'react';
import {View, Text} from 'react-native';
import usePostItem from './hook';
import styles from './styles';

const PostItem = props => {
  const {title, description} = usePostItem(props);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
      <View style={styles.spacer} />
      <View>
        <Text style={styles.description} numberOfLines={20}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default PostItem;
