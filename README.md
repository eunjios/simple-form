# 📋 폼 연습하기

- [About](#about)
  - [Goals](#goals)
  - [Built with](#built-with)
- [Features](#features)
  - [유효성 검증](#유효성-검증)
  - [커스텀 훅](#커스텀-훅)
  - [UI/UX](#uiux)
- [Troubleshooting](#troubleshooting)
  - [react-icons 리턴 이슈](#react-icons-리턴-이슈)
- [Todos](#todos)

## About

![React](https://img.shields.io/badge/React-424242?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-424242?style=flat-square&logo=TypeScript)
![Emotion](https://img.shields.io/badge/👩‍🎤%20Emotion-424242?style=flat-square)

> UX를 고려하여 폼의 유효성을 검사하는 프로젝트

https://github.com/eunjios/simple-form/assets/77034159/a15d1a2e-610d-4612-8efa-f6d9bda502c6



### Goals

1. Custom hooks 으로 로직 분리하기
2. Custom hooks 을 활용하여 코드의 재사용성 높이기
3. Emotion 사용하여 스타일링 하기
4. JavaScript에서 TypeScript로 바꿔보기

### Built with

- React
- TypeScript
- JavaScript
- Emotion
- React Icons
- yarn

## Features

### 유효성 검증

- 정규식을 사용하여 각 입력의 유효성 검증

  ```ts
  const nameReg: RegExp = /^[가-힣]{2,4}$/;
  const emailReg: RegExp =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const jobReg: RegExp = /^[가-힣]+$/;
  ```

### 커스텀 훅

- 폼의 모든 입력에 사용될 수 있는 제네릭한 커스텀 훅 (useForm) 구현

### UI/UX

- 사용자로부터 이름, 이메일, 직업을 입력 받을 수 있는 폼 컴포넌트 구현
- 입력 상태에 따라 조건부 스타일링
  ```ts
  export const submitButtonStyle = (
    isInvalid: boolean
  ) => css`
    /* 중략 */
    cursor: ${isInvalid ? 'not-allowed' : 'pointer'};
    background: ${isInvalid ? '' : '#4fe0b6'};
    color: ${isInvalid ? '' : '#fff'};
  `;
  ```

## Troubleshooting

### react-icons 리턴 이슈

**문제 상황**

TypeScript로 바꾼 후 react-icons가 리턴이 되지 않고 다음 오류가 발생

> "Parsing error: '>' expected.eslint 'BsCheck' refers to a value, but is being used as a type here. Did you mean 'typeof BsCheck'?ts(2749)"

**해결 방법**

- [스택 오버플로우](https://stackoverflow.com/questions/69248594/cant-use-react-icons-component-as-an-object-value-typescript) 를 참고하여 .ts 파일을 .tsx 파일로 바꿨으나 새로운 에러 발생
  > 'React' refers to a UMD global, but the current file is a module
- `import React from 'react';` 를 추가하여 해결

## Todos

- [x] 컴포넌트 구현
- [x] 커스텀 훅 로직 구현
- [x] UI/UX 개선
- [x] 타입스크립트로 변경
- [ ] 폼 제출 시 HTTP 요청
