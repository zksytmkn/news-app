import { RouteProp } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

import { RootStackParamList } from '../types/navigation';

type Props = {
  route: RouteProp<RootStackParamList, 'Article'>;
};

export const ArticleScreen: React.FC<Props> = ({ route }: Props) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
