
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Modal,
  RecyclerViewBackedScrollView,
  ListView
} from 'react-native';
import GlobalStyles from '../GlobalStyles'

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class PickerModal extends React.Component {
  static defaultProps = {
    style: View.propTypes.style,
    animationType: 'none',
    transparent: true,
    modalVisible: true,
    dataArray: [],

    title: 'title'
  };

  constructor(props) {
    super(props);

    this.state = {
      dataSource: this._getDataSource(props.dataArray),

      style: this.props.style,
      animationType: this.props.animationType,
      transparent: this.props.transparent,
      modalVisible: this.props.modalVisible,
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.dataArray != this.props.dataArray) {
      this.setState({
        dataSource: this._getDataSource(nextProp.dataArray)
      });
    }

    if (nextProp.modalVisible != this.props.modalVisible) {
      this.setState({
        modalVisible: nextProp.modalVisible,
      });
    }
  }

  render() {
    return (
      <Modal
        animationType={this.state.animationType}
        transparent={this.state.transparent}
        visible={this.state.modalVisible}
        onRequestClose={() => {this._setModalVisible(false)}}>
        <View style={[styles.modalContainer, {backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}>
          <View style={styles.viewContainer}>
            <View style={styles.titleRow}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => {this._setModalVisible(false)}}>
                <Image style={{width: 16, height: 16, resizeMode: 'contain'}}
                       source={require('../img/icon_cancel_grey.png')}/>
              </TouchableOpacity>
              <Text style={[styles.titleText, styles.modalTitle]}>{this.props.title}</Text>
            </View>
            <View style={[GlobalStyles.divider, {marginTop: 0, marginBottom: 0}]}/>
            <ListView
              style={{flex: 1}}
              dataSource={this.state.dataSource}
              renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
              renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
              renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={[GlobalStyles.divider, {marginTop: 0, marginBottom: 0, marginLeft: 16}]}/>}
            />
          </View>
        </View>
      </Modal>
    )
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowData, rowID)} underlayColor='gray'>
        <View>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>
              {rowData.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _pressRow(rowData, rowID) {
    this.props.selectedData && this.props.selectedData(rowData);
    this.props.selectedIndex && this.props.selectedIndex(rowID);
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
    if (visible) {
      this.props.onShowModal && this.props.onShowModal();
    } else {
      this.props.onHideModal && this.props.onHideModal();
    }
  }

  _getDataSource(array) {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(array)
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  viewContainer: {
    width: deviceWidth,
    height: deviceHeight / 2,
    backgroundColor: 'white',
  },
  titleRow: {
    padding: 16,
    flexDirection: 'row',
  },
  cancelButton: {
    alignSelf: 'center',
  },
  titleText: {
    flex: 1,
    alignSelf: 'center',
    marginRight: 16,
    color: '#5d5d5d'
  },
  row: {
    padding: 16,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '300',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
});