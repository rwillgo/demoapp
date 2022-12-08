import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ModalLoader from '../../components/ModalLoader';
import useNewPost from './hook';
import styles from './styles';

function NewPost(props) {
  const {
    isFetching,
    title,
    description,
    setTitle,
    setDescription,
    onSubmitPostPressHandler,
    onBackPressHandler,
  } = useNewPost(props);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsView}>
        <TouchableOpacity onPress={onBackPressHandler}>
          <Text style={styles.buttonLabel}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.inputContainer}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputView}>
          <Text style={styles.textLabel}>Title:</Text>
          <TextInput
            style={styles.textInput}
            value={title}
            multiline={true}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.inputView}>
          <Text style={styles.textLabel}>Description</Text>
          <TextInput
            style={styles.textInput}
            value={description}
            multiline={true}
            onChangeText={setDescription}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.submitView}>
          <TouchableOpacity onPress={onSubmitPostPressHandler}>
            <Text style={styles.submitText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isFetching && <ModalLoader />}
    </SafeAreaView>
  );
}

export default NewPost;
