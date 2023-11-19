import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { ListItem } from '../components/listItem';
import { Article } from '../types/article';
import { RootStackParamList } from '../types/navigation';

export const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(Constants.expoConfig?.extra?.apiUrl);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }: { item: Article }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
