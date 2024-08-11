import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ProfilePictureProps {
  size?: 'small' | 'medium' | 'large';
  uri?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ size = 'medium', uri }) => {
  const dimension = getDimension(size);

  const styles = StyleSheet.create({
    container: {
      width: dimension,
      height: dimension,
      borderRadius: dimension / 2,
      backgroundColor: '#E5E7EB',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });

  if (uri) {
    return (
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Feather name="user" size={dimension * 0.5} color="#9CA3AF" />
    </View>
  );
};

const getDimension = (size: 'small' | 'medium' | 'large'): number => {
  switch (size) {
    case 'small':
      return 32;
    case 'medium':
      return 48;
    case 'large':
      return 64;
    default:
      return 48;
  }
};

export default ProfilePicture;
