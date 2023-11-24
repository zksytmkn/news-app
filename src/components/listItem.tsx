import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

type Props = {
  imageUrl: string;
  title: string;
  author: string;
  onPress: () => void;
};

export const ListItem = ({ imageUrl, title, author, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="h-[100px] w-full border border-gray-200 flex-row"
      onPress={onPress}>
      <View className="w-[100px] items-center justify-center">
        <Image className="w-[100px] h-[100px]" source={{ uri: imageUrl }} />
      </View>
      <View className="flex-1 p-3 justify-between">
        <Text numberOfLines={3} className="text-sm">
          {title}
        </Text>
        <Text className="text-xs text-gray-500">{author}</Text>
      </View>
    </TouchableOpacity>
  );
};
