import React from "react";
import { Text, View, Button, Modal } from 'react-native';
import { styles } from './styles';

const ModalDeleteItem = ({modalVisible, selectedExpense, onHandleDeleteItem, onHandleCancel}) => {
    return (
        <Modal visible={modalVisible} animationType='fade'>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Eliminación de gasto</Text>
            <View style={styles.modalDetailContainer}>
              <Text style={styles.modalDetailText}>Está seguro que desea eliminar este gasto?</Text>
              <Text style={styles.selectedExpense}>{selectedExpense?.title}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button 
                title='Eliminar'
                color='#435058'
                onPress={onHandleDeleteItem}
              />
              <Button 
                title='Cancelar'
                color='#968E85'
                onPress={onHandleCancel}
              />
            </View>  
          </View>
        </Modal>
    )
}

export default ModalDeleteItem;