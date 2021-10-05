<h1 align="center" >Ravn-Challenge-V2-Israel-Alfaro</h1>
<h2 align="center" > 
  <sup>
    <b> A React Native App that shows Star Wars characters. </b> 
  </sup>  
</h2> 


# iOS Screenshots


---

| Home | People Detail | Error Boundary
|:-:|:-:|:-:|
| ![Simulator Screen Shot - iPhone 12 - 2021-10-05 at 02 36 37](https://user-images.githubusercontent.com/12678606/135989559-41a7d6d2-4a88-4d80-931e-17a93b4fd39c.png) | ![Simulator Screen Shot - iPhone 12 - 2021-10-05 at 02 36 44](https://user-images.githubusercontent.com/12678606/135989642-ae3667fc-8796-43ea-971f-8ae6171b6717.png) | ![Simulator Screen Shot - iPhone 12 - 2021-10-05 at 02 44 59](https://user-images.githubusercontent.com/12678606/135990935-0579888e-4fc1-4c22-9031-abba6055f7d8.png)

# Android Screenshots

---

| Home | People Detail | Error Boundary
|:-:|:-:|:-:|
| ![Screenshot_1633423208](https://user-images.githubusercontent.com/12678606/135990173-2861125a-0ec6-430e-98a7-0ac1a23b344e.png) | ![Screenshot_1633423236](https://user-images.githubusercontent.com/12678606/135990236-7c9dc281-f7dd-4ad9-8b97-e418437a0d91.png) | ![Screenshot_1633423414](https://user-images.githubusercontent.com/12678606/135990640-d39c8b2a-725a-464c-972b-6147f975f5c7.png)


## Pre-requisties
  - Make sure you have [Node 12 LTS](https://nodejs.org/en/download/) or greater installed.
  - You can see the steps for install RN CLI in their [documentation](https://reactnative.dev/docs/environment-setup).

# Instalation

- Download or clone this repo by using the link below `git@github.com:iKronyck/Ravn-Challenge-V2-Israel-Alfaro.git`.
- Go to project root folder `cd Ravn-Challenge-V2-Israel-Alfaro`.
- Run `yarn install`.

## Running

- If you are testing on iOS, run `npx pod-install`.
- Run the app in a Android device or emulador with the command below `npx react-native run-android`.
- Run the app in a iOS device or emulador with the command below`npx react-native run-ios`.

## Project structure

```
root
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   ├── @components
│   │   ├── Typography
│   │   │   ├── Typography.style.tsx
│   │   │   ├── Typography.tsx
│   │   │   ├── Typography.type.ts
│   │   ├── index.ts
│   ├── graphql
│   │   ├── queries
│   ├── hooks
│   │   ├── useAllPeople.ts
│   │   ├── index.ts
│   ├── router
│   │   ├── RouterApp
│   │   │   ├── RouterApp.tsx
│   │   │   ├── RouterApp.type.ts
│   │   ├── index.ts
│   ├── screens
│   │   ├── ExampleScreen
│   │   │   ├── ExampleScreen.style.tsx
│   │   │   ├── ExampleScreen.tsx
│   │   │   ├── ExampleScreen.type.ts
│   │   │   └── index.ts    
│   │   ├── index.ts 
│   ├── ui
│   │   ├── colors
│   │   │   ├── index.ts
│   │   ├── sizes
│   │   │   ├── index.ts  
│   │   ├── index.ts 
│   ├── utils
│   ├── utils
│   │   ├── index.ts
│   │   ├── someUtilFunction.ts
│   ├── index.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── ios
│   ├── AppProject
│   ├── AppProject-tvOS
│   ├── AppProject-tvOSTests
│   ├── AppProject.xcodeproj
│   └── AppProjectTests
├── index.js
├── tsconfig.json
└── package.json

```

## App Stack

- React-Native 0.66.0
- React Navigation 6.X.X
- TypeScript
- GraphQL
- Apollo Client

<p align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=Ravn-Challenge-V2-Israel-Alfaro" id="counter">
</p>
