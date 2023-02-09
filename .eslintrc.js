/* eslint-disable */ 

module.exports = {
  // eslint의 동작환경을 지정
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 기본적인 룰셋을 지정
  extends: 'eslint:recommended',
  // 특정 파일에만 다른 룰을 지정
  overrides: [],
  // 사용환경을 최신 자바스트립트로 가정
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module"
  },
  // extends 옵션으로 지정한 룰셋을 덮어씌운다
  rules: {
    // var는 사용할 수 없다
    'no-var': ['error'],

    // // 줄바꿈은 유닉스 스타일로 통일하겠다
    // 'linebreak-style': ['error', 'unix'],

    // // 세미콜론은 사용하지 않겠다(타입스크립트 프로젝트에서 권장)
    // semi: ['error', 'never'],

    // Function.prototype.apply() 를 사용할 때는 spread 연산자를 사용해야 한다
    'prefer-spread': ['error'],
    // 선언한 표현식은 반드시 사용해야 한다
    'no-unused-expressions': ['error'],
    // Function 객체에 new 연산자를 사용할 수 없다
    'no-new-func': ['error'],
    // goto 구문의 label을 사용할 수 없다
    'no-labels': ['error'],
    // 프로토타입을 동적으로 확장할 수 없다
    'no-extend-native': ['error'],
    // eval을 사용할 수 없다
    'no-eval': ['error'],
    // 생성자 함수는 return을 할 수 없다
    'no-constructor-return': ['error'],
    // if 문에서 return을 하면 else 문에서 return을 할 수 없다
    'no-else-return': ['error'],
    // 안전하지 못한 옵셔널 체이닝을 할 수 없다
    'no-unsafe-optional-chaining': ['error'],
    // 불필요한 반복문은 사용할 수 없다
    'no-unreachable-loop': ['error'],
    // 도달하지 못하는 코드는 사용할 수 없다
    'no-unreachable': ['error'],

    // import한 심볼은 읽기 전용이다
    'no-import-assign': ['warn'],

    // 파라미터는 읽기 전용이다
    'no-param-reassign': ['warn'],
    // 선언하지 않은 코드를 사용할 수 없다
    'no-use-before-define': ['error'],

    // if ~ else 중첩은 허용하지 않는다
    'max-depth': [
      'warn',
      {
        max: 1,
      },
    ],

    // return 문 이전에는 반드시 빈 줄이 있어야 한다
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],

    // 삼항연산자를 허용하지 않는다
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],

    // // 문자열 선언에는 홑따옴표를 사용한다
    // quotes: [
    //   'error',
    //   'single',
    //   {
    //     avoidEscape: true,
    //   },
    // ],

    // // computed property 앞뒤에는 공백이 있어야 한다.
    // 'computed-property-spacing': [
    //   'error',
    //   'never',
    //   {
    //     enforceForClassMembers: true,
    //   },
    // ],

    // 중첩된 object 앞뒤에는 공백이 있어야 한다.
    'object-curly-spacing': ['warn', 'always'],
    // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
    'array-bracket-spacing': ['warn', 'never'],
    // 중괄호의 스타일을 통일
    'brace-style': ['warn'],

    // // statemnet는 반드시 중괄호로 감싸야 하고 1줄 이상으로 작성해야 한다
    // curly: ['error', 'multi-line', 'consistent'],

    // debugger 는 사용을 권장하지 않는다
    'no-debugger': ['warn'],
    // no-alert 룰과 충돌하므로 끔
    'no-restricted-globals': ['off'],
    // alert, confirm, prompt 는 사용을 권장하지 않는다
    'no-alert': ['warn'],
    // // console.log 는 사용할 수 없다
    // 'no-console': [
    //   'warn',
    //   {
    //     allow: ['warn', 'error'],
    //   },
    // ],
    // jsx에는 쌍 따옴표를 사용해야 한다.
    'jsx-quotes': ['warn', 'prefer-double'],
    // 문자열 연결에는 템플릿 문자열을 사용해야 한다
    'prefer-template': ['warn'],
    // 객체의 프로퍼티 이름은 필요할 때만 따옴표로 감싸야 한다
    'quote-props': ['warn', 'as-needed'],

    'no-undef':'warn',
    'no-unused-vars':'warn'
  },
  // ES6~7을 파싱하다가 생긴 문제 해결을 위한 플러그인 인터폴레이션 구문에 일반 코드 사용가능
  parser:"babel-eslints"
}