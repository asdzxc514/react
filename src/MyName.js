import React from 'react';  // 함수형 컴포넌트는 , { Component } 생략가능

class MyName = ({ name }) => {
    return(
        <div>안녕하세요! 제 이름은 {name} 입니다.</div>
    )
};

MyName.defaulProps = {
    name: 'hyejin'
}

export default MyName;