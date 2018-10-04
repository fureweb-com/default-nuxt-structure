# Nuxt 프로젝트 프론트엔드 환경 준비

## 사전 준비

### 운영체제 내 필수 애플리케이션
- Node.js 8.12+ (LTS)

### 필수 node.js 모듈

| moduleName    | Version       |
| ------------- |:-------------:|
| axios         | 0.18.0        |
| lodash        | 4.17.11       |
| moment        | 2.22.2        |
| node-sass     | 4.9.3         |
| normalize.css | 8.0.0         |
| nuxt          | 2.0.0         |
| sass-loader   | 7.1.0         |

## 도메인 <-> Nuxt 연결
- 포트번호 : 3000
- nginx에서 해당 도메인 해당되는 모든 요청에 대해, proxy_pass를 이용하여 uri와 args가 모든 경로에 대해 전달될 수 있도록 하는 설정 필요

## NUXT 기초 구조 설정을 위한 필수 패키지 설치
- 이미 설치된 경우 건너띌 수 있다.
```
npm install -g @vue/cli @vue/cli-init
```

## NUXT를 이용한 새 프로젝트 생성
```
vue init nuxt-community/starter-template <project-name>
```

## NUXT 기본 구조
```bash
├── assets     # css, font, js 등 컴파일되지 않은 assets류 파일이 저장되는 곳
├── components # Vue.js 컴포넌트가 저장되는 곳
├── layouts    # 앱의 레이아웃과 관련된 파일이 저장되는 곳
├── middleware # 앱 내 페이지나 레이아웃 랜더링 전 실행시킬 js파일이 저장되는 곳 (auth.js 등)
├── pages      # 라우팅을 포함한 vue페이지가 저장되는 곳. (vue 파일 규칙에 따라 라우터 자동생성)
├── plugins    # 루트 vue 앱이 생성되기 전 실행할 js 플러그인이 저장되는 곳
├── static     # 정적 파일이 저장되는 곳. 루트 컨텍스트로부터 파일이 서비스된다
├── store      # Vuex store 파일이 저장되는 곳. index.js가 존재하면 자동으로 활성화 
├── nuxt.config.js # Nuxt 관련 사용자 정의 설정이 저장되는 파일
└── package.json   # 앱 의존성 및 실행 스크립트를 포함하는 기본 파일, 반드시 존재해야한다.
```

## nuxt.config.js의 build.extend 함수 시그니처 및 클라이언트 판단 로직 변경

```javascript
// 클라이언트 판단을 extend 함수의 두번째 객체에서 추출하는게 아닌, 
// process.client를 통해 처리하도록 변경되었으나
// starter-template는 아직 반영되지 않아 수정이 필요함.
extend (config, { isDev }) { 
  if (isDev && process.client) {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /(node_modules)/
    })
  }
}
```

## normalize.css 설치 및 적용
1. 설치
```
npm i --save normalize.css
```

2. nuxt.config.js에 모듈 적용
```javascript
css: ['normalize.css'] // 해당 속성 추가
```

## scss 처리를 위한 라이브러리 추가
1. node-sass, sass-loader 설치
```
npm i --save node-sass sass-loader
```

## 필수 라이브러리 추가
- axios, moment, lodash 설치
```
npm i --save axios moment lodash
```

## layouts/default.vue 파일 내 template의 div와 nuxt element css 추가
- div, nuxt element에 id 추가
- div에 margin:0 auto 추가
- nuxt에 position: relative, max-width: 640px, min-width: 320px 추가

## pages의 Vue 인스턴스 초기화 시 적용되는 공통 규칙
- 페이지 별 vue 인스턴스내에서 비동기처리 후 컨텐츠가 완성되는 경우 `beforeCreate` lifecycle hook을 이용하여 비동기 처리를 완성한 뒤 `isCreated` 속성을 조건에 따라 true로 변경하여, `isCreated`가 false인 동안에는 loading이 화면에 노출되도록 한다.
  
- 또는 모든 비동기 처리가 필요한 부분에 대해 기본 규격(이미지, 텍스트 등)을 정해 로딩되는 동안에는 해당 기본 컴포넌트가 노출되도록 (2018년 10월 페이스북 또는 링크드인에서 로딩 시 기본 에셋이 노출되는 형태) 작업하고, 완료되면 보여지도록 처리한다. 이렇게 설정하는 경우 전역 레벨에서 .isLoading이라는 class가 동적으로 처리되도록 설정한다. 비동기 작업이 완료되면, 해당 앨리먼트에서 .isLoading이 제거될 수 있도록 Vue쪽 코드를 작성해야한다.
