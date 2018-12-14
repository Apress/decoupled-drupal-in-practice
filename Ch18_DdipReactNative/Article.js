// Article.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Article = ({article}) => (
  <View style={styles.item}>
    <Text style={styles.itemHeading}>{article.attributes.title}</Text>
    <Text style={styles.itemAttribute}>ID: {article.id}</Text>
    <Text style={styles.itemAttribute}>Created: {article.attributes.created}</Text>
    <Text style={styles.itemAttribute}>Body: {article.attributes.body.value}</Text>
  </View>
);

Article.propTypes = {
  article: PropTypes.object
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#eee',
    borderBottomColor: '#ccc',
    borderBottomWidth: 5,
  },
  itemHeading: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
  },
  itemAttribute: {
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default Article;
