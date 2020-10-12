// 리액트 라이브러리를 사용, 그중에서 Component 라이브러리 사용
import React, { Component } from 'react';
// 리액트 네이티브 라이브러리의 클래스 import
import {Text, View, Button, StyleSheet, Image} from 'react-native';

// 리액트 네이티브는 Component를 상속받은 클래스들만 화면에 보여질 수 있다.
class MyApp extends Component{
    // 이 컴포넌트가 보여줄 뷰를 그려내는 메소드
    // 한번에 하나의 Component만 리턴할 수 있다.
    // 여러개를 보여주고 싶다면 ViewGroup역할이 필요함(Layout같은... 웹에서는 div와 같은...).

    render(){

        // 지역변수
        let name = "SAM";
        let btnTitle = "click me"; 

        // XML문법 안에서 JS문법 사용가능 함.
        // XML안에 {}를 사용하면 JS문법 사용가능
        // 단, {}안에 변수나 상수, 값 또는 함수만 놓여질 수 있음.
        // 스타일 적용 : css 인라인 적용과 흡사함!!
        // 스타일을 JS의 객체로 만들어서 지정해줌

        return (
            <View style={styles.root}>
                <Text style={styles.text}>Hello {name}</Text>
                <Text style={plainTextStyle}>Nice to meet you.</Text>
                <View style={{marginTop:20}}>
                    <Button title={btnTitle}></Button>
                </View>

                <Image source={require('./moana01.jpg')}></Image>
               
            </View>
        ); // 여러줄일때는 ()쓰는게 좋음.

    }

} 


// 전역의 위치에 스타일 객체들
let textStyle={
    color : 'red', 
    fontSize : 20, // 기본단위 dp
    fontWeight : 'bold',
    margin : 16
};

// 전체 View의 스타일
const rootView = {
    backgroundColor : '#aaffcc',
    // height: '100%'
    // React native는 기본적으로 css 중 flex 스타일 적용되어 있음.
    // 이미 display:flex는 되어 있는 상태
    flex:1,  // layout의 weight과 같은 역할
    padding:16
};

const plainTextStyle = {
    margin : 8,
    color : '#333333'
};

// 버튼은 스타일이 안됨.
const btnStyle = {
    margin : 80
};


// 스타일이 위처럼 개별변수로 존재하면 가독성이 좋지 못함.
// 스타일을 몰아서 한번에..

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#AAFFCC',
        flex:1,
        padding:16
    },
    text:{
        color: 'blue',
        fontSize:25
    }
});


// 위에서 설계한 MyApp 클래스를 index.js에서 첫번째로 실행할 컴포넌트로 설정하기 위해서는 추출
export default MyApp;
