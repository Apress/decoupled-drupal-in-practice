// App.js
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Article from './Article.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      errored: false,
      loading: true
    };
  }
  componentWillMount() {
    axios.get('http://jsonapi-test.dd:8083/jsonapi/node/article')
      .then(res => this.setState({ articles: res.data.data }))
      .catch(err => {
        console.log(err);
        this.setState({ errored: true });
      })
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.errored ? (
          <Text>Sorry, {'this'} information is not available at the moment.</Text>
        ) : (
          <View>
            {this.state.loading ? (
              <Text>Loading ...</Text>
            ) : (
              <FlatList
                data={this.state.articles}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => (
                  <Article article={item} />
                )}
              />
            )}
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 22,
  },
});
