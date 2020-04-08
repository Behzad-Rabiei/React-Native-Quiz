import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import handleAnswer from '../../util/handleAnswer';
import styles from './styles';

class Answer extends Component {
  render() {
    const {answers} = this.props;
    return (
      <View style={styles.container}>
        {answers.map((answer) => (
          <TouchableOpacity
            style={styles.button}
            key={answer.id}
            onPress={() => handleAnswer(answer.correct, this.props)}>
            <Text style={styles.text}>{answer.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default connect()(Answer);
