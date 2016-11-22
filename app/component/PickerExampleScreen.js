/**
 * Created by ZhaoHaiyang on 2016/11/17.
 */
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Alert,
  View,
  Dimensions,
  ViewPagerAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';
import GlobalStyles from '../GlobalStyles'
import PickerModal from '../uiComponents/PickerModal'
import AppRouters from '../AppRouters'

const array = [{name: '百度', id: '0', url: 'http://www.baidu.com'},
  {name: '搜狗', id: '0', url: 'http://www.sogou.com'},
  {name: '必应', id: '0', url: 'https://www.bing.com'},
  {name: '谷歌', id: '0', url: 'https://www.google.com.hk'},
  {name: '360', id: '0', url: 'https://www.so.com'},

];

export default class PickerExampleScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      purposeModalVisible: false,
    }
  }

  render () {
    let purposeItems = this.formatArray(array);
    return (
      <View style={[GlobalStyles.container, {justifyContent: 'center'}]}>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
          <Text style={styles.text}>选择搜索引擎</Text>
        </TouchableOpacity>
        {
          this.state.purposeModalVisible ? (
          <PickerModal
            title="选择搜索引擎"
            dataArray={purposeItems}
            selectedData={(purpose) => {this.onPurposeSelected(purpose);}}
            onHideModal={() => this.setState({purposeModalVisible: false})}
          />
          ) : null
        }
      </View>
    )
  }

  onPress() {
    this.setState({
      purposeModalVisible: true,
    })
  }

  formatArray(array) {
    return formatedArray = array.map((item, index) => {
      let formatedObj = {};
      formatedObj.name = item.name;
      formatedObj.id = item.id;
      formatedObj.url = item.url;
      return formatedObj;
    });
  }

  onPurposeSelected(purpose) {
    this.setState({
      purposeModalVisible: false,
    });
    let route = AppRouters.webView;
    route.params.url = purpose.url;
    this.props.navigator.push(route);
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 26
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  }
});
