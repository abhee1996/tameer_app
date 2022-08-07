import React from 'react';
import { Modal, View } from 'react-native';

function ViewImage(ImageModalVisible,setImageModalVisible) {
    return (
        <View>
        <Modal
                style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%) !important'}}
                animationType='fade'
                transparent={true}
                onRequestClose={()=>setModalVisible(false)}
                visible={visible}
            >
                <View style={{flex:1 ,alignItems: 'center', justifyContent: 'center', backgroundColor:'#00000069'}}>
                    <View  style={{padding:20 , backgroundColor:'#fff', borderRadius: 10}}>
                        <Image style={{width: 400, height: 600}} source={this.props.image} />
                    </View>
                </View>
            </Modal>           
        </View>
    );
}

export default ViewImage;