import React from 'react';
import { useColorScheme, View/*, TextInput, Text*/ } from 'react-native';

import DropDownPicker, { defaultStyles } from 'react-native-picker-select';
import Label from '../label';

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const Dropdown = ({
  placeholderText,
  defaultValue,
  onChangeOption,
  optionsList,
  style,
  ...props
}) => {

  return (
    <View style={styles.container}>
      <Label {...props}>
          <DropDownPicker
              style={{...styles}}
              value={defaultValue}
              placeholder={{
                label: placeholderText,
                value: null,
                color: COLORS.gray,
              }}
              onValueChange={(value) => onChangeOption(value)}
              items={ optionsList }
          />
        {/*<TextInput
          {...props}
          
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />*/}
      </Label>
    </View>
  );
};

export default Dropdown;
