import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type Props = {
  onPress: () => void;
  enabled: boolean;
};

export const ClipButton = ({ onPress, enabled }: Props) => {
  const name = enabled ? 'bookmark' : 'bookmark-o';
  return (
    <TouchableOpacity onPress={onPress} className="p-1">
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
};
