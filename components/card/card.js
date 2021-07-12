

import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

import Constants from "expo-constants";
import FlipCard from "react-native-flip-card";

const images = [
require("../../assets/card/(1).jpg"),
require("../../assets/card/(2).jpg"),
require("../../assets/card/(3).jpg"),
require("../../assets/card/(4).jpg"),
require("../../assets/card/(5).jpg"),
require("../../assets/card/(6).jpg"),
require("../../assets/card/(7).jpg"),
require("../../assets/card/(8).jpg"),
require("../../assets/card/(9).jpg"),
require("../../assets/card/(10).jpg"),
require("../../assets/card/(11).jpg"),
require("../../assets/card/(12).jpg"),
require("../../assets/card/(13).jpg"),
require("../../assets/card/(14).jpg"),
require("../../assets/card/(15).jpg"),
require("../../assets/card/(16).jpg"),
require("../../assets/card/(17).jpg"),
require("../../assets/card/(18).jpg"),
require("../../assets/card/(19).jpg"),
require("../../assets/card/(20).jpg"),
require("../../assets/card/(21).jpg"),
require("../../assets/card/(22).jpg"),
require("../../assets/card/(23).jpg"),
require("../../assets/card/(24).jpg"),
require("../../assets/card/(25).jpg"),
require("../../assets/card/(26).jpg"),
require("../../assets/card/(27).jpg"),
require("../../assets/card/(28).jpg"),
require("../../assets/card/(29).jpg"),
require("../../assets/card/(30).jpg"),
require("../../assets/card/(31).jpg"),
require("../../assets/card/(32).jpg"),
require("../../assets/card/(33).jpg"),
require("../../assets/card/(34).jpg"),
require("../../assets/card/(35).jpg"),
require("../../assets/card/(36).jpg"),
require("../../assets/card/(37).jpg"),
require("../../assets/card/(38).jpg"),
require("../../assets/card/(39).jpg"),
require("../../assets/card/(40).jpg"),
require("../../assets/card/(41).jpg"),
require("../../assets/card/(42).jpg"),
require("../../assets/card/(43).jpg"),
require("../../assets/card/(44).jpg"),
require("../../assets/card/(45).jpg"),
require("../../assets/card/(46).jpg"),
require("../../assets/card/(47).jpg"),
require("../../assets/card/(48).jpg"),
require("../../assets/card/(49).jpg"),
require("../../assets/card/(50).jpg"),
require("../../assets/card/(51).jpg"),
require("../../assets/card/(52).jpg"),
require("../../assets/card/(53).jpg"),
require("../../assets/card/(54).jpg"),
require("../../assets/card/(55).jpg"),
require("../../assets/card/(56).jpg"),
require("../../assets/card/(57).jpg"),
require("../../assets/card/(58).jpg"),
require("../../assets/card/(59).jpg"),
require("../../assets/card/(60).jpg"),
require("../../assets/card/(61).jpg"),
require("../../assets/card/(62).jpg"),
require("../../assets/card/(63).jpg"),
require("../../assets/card/(64).jpg"),
require("../../assets/card/(65).jpg"),
require("../../assets/card/(66).jpg"),
require("../../assets/card/(67).jpg"),
require("../../assets/card/(68).jpg"),
require("../../assets/card/(69).jpg"),
require("../../assets/card/(70).jpg"),
require("../../assets/card/(71).jpg"),
require("../../assets/card/(72).jpg"),
require("../../assets/card/(73).jpg"),
require("../../assets/card/(74).jpg"),
require("../../assets/card/(75).jpg"),
require("../../assets/card/(76).jpg"),
require("../../assets/card/(77).jpg"),
require("../../assets/card/(78).jpg"),
];



function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let w = Dimensions.get('screen').width/3.5;

let list=[];

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickable: true,
      count: 3,
      tableData: [[]],
      imageobj:{}
    };
    this._showData = this._showData.bind(this);
    this.setTableData = this.setTableData.bind(this);
  }

  _showData = (data, i, j) => {
    let tmp = this.state.tableData;
    this.setState({
      tableData: tmp,
    });
  };

  setTableData() {
    let list = images;
    list = shuffle(list);
    let list2d = listToMatrix(list, 3);
    this.setState({
      tableData: list2d,
    });
  }

  UNSAFE_componentWillMount() {
    this.setTableData();
    list=[];
  }


  render() {
  
    
    return (
      <View style={{backgroundColor:"purple"}}>
        <View
          style={{
            opacity: 0.5,
            justifyContent: "center",
            alignItems: "center",
            elevation: 1,
            top: Constants.statusBarHeight + 5,
            left: 10,
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: "rgba(1,1,1,0.0)",
            position: "absolute",
          }}
        >
          <Text style={{ color: "#FFF" }}>{this.state.count}</Text>
        </View>
        <ScrollView ref={ref => {this.scrollView = ref}} vertical={true} style={{ top: Constants.statusBarHeight }}>
          <View style={{ flex: 1, paddingBottom: 100 }}>
            
              {this.state.tableData.map((rowData, i) => (
                <View key={'view'+i} style={styles.row}>
                  {rowData.map((cellData, j) => (
                    <FlipCard
                    key={i*3+j}
                      style={styles.cell}
                      friction={6}
                      perspective={1000}
                      flipHorizontal={true}
                      flipVertical={false}
                      flip={false}
                      clickable={this.state.clickable}
                      onFlipStart={async () => {
                        if (this.state.count > 0) {
                          list.push(cellData);
                          await this.setState({ count: this.state.count - 1 });
                        }
                        if (this.state.count === 0) {
                          await this.setState({ clickable: false });
                          
                          setTimeout(async () => {
                            await this.scrollView.scrollToEnd({animated: true});
                          }, 500); 
                        }
                      }}
                     
                    >
                      {/* Face Side */}

                        <View>
                          <Text>{cellData}</Text>
                        </View>

                      {/* Back Side */}
                      
                        <View style={{flex:1}}>
                          
                          

                          <Image
                            style={{width: w, height: 200,borderRadius:20}}
                            source={cellData}
                          />
                          

                        </View>
                    </FlipCard>
                  ))}
                </View>
              ))}
            <View style={{justifyContent: "center",borderRadius:50,
    alignItems: "center",flex:1,top:50,height:Dimensions.get('screen').height-100,backgroundColor: "red"}}>
                <Text>SHOW ME MY DESTİNY</Text>
                <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('result',{list:list}) }
      />
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

let styles = StyleSheet.create({
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { marginLeft: 5 },
  row: {
    height: 200,
    flexDirection: "row",
    marginBottom: 3,
    marginHorizontal: 3,
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    flex: 1,
    backgroundColor: "red",
    height: 200,
    margin: 1,
  },
});
