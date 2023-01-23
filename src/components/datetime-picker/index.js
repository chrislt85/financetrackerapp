import React, { useState } from 'react';
import { useColorScheme, Button, View, Text, TouchableOpacity } from 'react-native';
import { formatDate } from '../../utils/functions/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Label from '../label';

import { COLORS } from "../../constants/themes/colors";
import { styles } from './styles';

const DatetimePicker = ({
  selectedDate, 
  onSelectedDate,
  style,
  ...props
}) => {


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Label {...props}>
        <View style={styles.datetimeContainer}>
            <Text style={styles.datetimeSelected}>
              { selectedDate ? formatDate(selectedDate) : formatDate(new Date())}
            </Text>
            <TouchableOpacity style={styles.pickDate} onPress={showDatePicker}>
                <MaterialCommunityIcons 
                    name='calendar-month'
                    size={24}
                    color={COLORS.black}
                />
            </TouchableOpacity>

            <DateTimePickerModal
              date={selectedDate}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
        </View>
      </Label>
    </View>
  );
};

export default DatetimePicker;
