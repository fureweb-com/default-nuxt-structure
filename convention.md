# NUXT 코드 작성 관련 컨벤션

## Javascript
- 참고링크 : [자바스크립트 스탠다드 스타일](https://standardjs.com/readme-kokr.html)
- 2칸 공백 들여쓰기
- 문자열에 작은 따옴표, 또는 백틱(`)사용
- 사용되지 않을 변수 선언 금지
- 세미콜론 사용 금지
- `'('`, `'['`, `'\'` 과 같은 문자로 라인 시작 금지 (세미콜론 생략 시 문제 발생)
- 키워드 뒤 공백 사용 `if (true) { ... }`
- 함수명 뒤 공백 사용 `function name (...args) { ... }`
- `==` 대신 `===` 사용 (null || undefined 일때만 `==` 사용 가능)
- 브라우저 전역 객체/함수/속성 사용 시 window 접두사 붙이기

## Vue 컴포넌트
- 모든 Vue 컴포넌트의 script 부분은 다음의 순서대로 작성합니다.

```javascript
export default {
  // 컴포넌트 마운트 위치 및 이름
  // (Nuxt.js에서는 사용하지 않음 / pages 내 컴포넌트로 자동 라우트 처리)
  // el: '',
  // name: '',

  // 외부 컴포넌트 관련
  components: {},
  mixins: [],
  props: [], /* 또는 props: {} */

  // NUXT 전용 속성
  head() {},
  asyncData(context) {},
  scrollToTop: Boolean,
  // 그 외 속성

  // 컴포넌트 내부 모델, 계산된 속성, 메소드, 감시
  data() {},
  computed: {},
  methods: {},
  watch: {},

  // lifecycle hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
}
```