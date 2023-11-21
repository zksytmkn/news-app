import { StackNavigationProp } from '@react-navigation/stack';
import { useAtom } from 'jotai';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { ListItem } from '../components/listItem';
import { clipAtom } from '../state/clip';
import { RootStackParamList } from '../types/navigation';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Clip'>;
};

export const ClipScreen: React.FC<Props> = ({ navigation }: Props) => {
  const [clips] = useAtom(clipAtom);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
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
    justifyContent: 'flex-start',
  },
});
