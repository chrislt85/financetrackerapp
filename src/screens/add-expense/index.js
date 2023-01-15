import React from "react";
import { View, Text, Button } from 'react-native';
import { COLORS } from "../../constants/themes/colors";

import { styles } from "./styles";

const AddExpense = () => {
    return (
        <View style={styles.container}>
            
            {/* react-native-dropdown-picker*/}

            <Text style={styles.title}>Categoría</Text>
            <Text style={styles.title}>Descripción</Text>
            <Text style={styles.title}>Fecha</Text>
            <Text style={styles.title}>Monto</Text>

            <Button
                title="Guardar"
                color={COLORS.primary}
                onPress={() => null}
            />
        </View>
    );
};

export default AddExpense;