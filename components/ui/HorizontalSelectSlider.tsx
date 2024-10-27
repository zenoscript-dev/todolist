import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Pressable } from '../Themed';
import { colors } from '@/constants/Colors';

interface SliderOption {
    label: string;
    value: string;
}

interface HorizontalSliderProps {
    items: SliderOption[],
    selectedItem?: SliderOption,
    onSelectedItemChange?: (item: SliderOption) => void;
}

const HorizontalSelectSlider = ({ items, selectedItem, onSelectedItemChange }: HorizontalSliderProps) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.sliderItemsWraper}
    >
      {items?.map((item, index) => (
        <Pressable 
          key={index} 
          style={[
            styles.sliderItem, 
            selectedItem?.value === item.value && styles.selectedItem
          ]}
          onPress={() => onSelectedItemChange && onSelectedItemChange(item)}
        >
          <Text>{item.label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HorizontalSelectSlider;

const styles = StyleSheet.create({
  sliderItemsWraper: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sliderItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.secondaryColor,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedItem: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
