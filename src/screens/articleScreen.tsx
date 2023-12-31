import { RouteProp } from '@react-navigation/native';
import { useAtom } from 'jotai';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

import { ClipButton } from '../components/clipButton';
import { clipAtom } from '../state/clip';
import { RootStackParamList } from '../types/navigation';

type Props = {
  route: RouteProp<RootStackParamList, 'Article'>;
};

export const ArticleScreen: React.FC<Props> = ({ route }: Props) => {
  const { article } = route.params;

  const [clips, setClips] = useAtom(clipAtom);

  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      const newClips = clips.filter((clip) => clip.url !== article.url);
      setClips(newClips);
    } else {
      const newClips = [...clips, article];
      setClips(newClips);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-start">
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};
