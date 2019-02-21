
## Webpack이란?
파일의 종속성을 스스로 파악하여, 종속성이 있어 서로 엮여 있는 파일을 하나의 파일로 묶어주는 역할을하는 모듈번들러 이다.

`번들링(bundling)` : 각 모듈들을 묶어(패키징하여) 해당 번들만으로 구동가능한 상태로 만드는 것

```js
// webpack 설치
npm install -g webpack
```
## 장점
- 다수의 파일을 서버에 매번 요청하는 것 보다는 하나의 파일로 작업하는 것이 웹 성능에 도움이 되고 파일 관리 측면에 효율성을 가진다 한다.
- 모듈화를 통해 소스를 관리하기가 좋아지고 코드의 재사용이 용이해진다.
- 네트워크 병목현상을 해결 할 수 있습니다.
- 모듈 단위로 개발이 가능합니다.
- 코드를 압축/최적화 할 수 있습니다.
- ES6 버전 이상의 스크립트를 사용할 수 있습니다.
- LESS, SCSS를 사용할 수 있습니다.


## Webpack 구성요소 4가지
### Entry
어디에서부터 웹팩이 코드를 변환시켜야 하는지, 그 출발점(시작)을 입력하는 곳이다.

프로젝트를 구성하는 파일들을 하나의 파일로 묶을 경우, 묶는 첫 시작점이 어디일지를 정리하는 곳이다. Entry는 여러 개의 엔트리를 가질 수 있다.

```js
module.export = {
  entry: './path/to/my/entry/file.js'
  /* 여러개의 entry 선언이 가능합니다.
  entry: {
    index: './path/to/my/entry/index.js',
    file: './path/to/my/entry/file.js'
  } */
}
```

### output
컴파일된 파일의 저장할 경로를 알려준다.

대부분 "dist"라는 폴더명을 만들어 여기에 완성된 파일을 저장한다(저장된다).Entry와 달리 output은 단 한 개만 입력 할 수 있다.

### Loader
파일 꾸러미에 다양한 파일이 존재할 수 있다. 이 파일들을 처리해야하는데 웹팩은 Loader를 통해 각각의 것들을 "어떻게 관리"할 정해준다

### Plugin
해당 종류의 파일"만" 변환시키는 Loader와 달리 Plugin은 번들 된 전체 코드를 대상으로 작업한다.










## Babel
2015년에 업데이된 ES6를 사용할 때, 이전 문법인 ES5로 변환해주는 변환장치(Preprocessor)
최신버전의 크롬이나 파이어폭스는 지원하지만, 구 버전의 브라우저나 IE를 위해 변환함