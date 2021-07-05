수업 리뷰

react-router-dom

라우터에서 각각 라우팅 할 페이지들을 import 하고
BrowserRouter를 import 한 뒤
Router 컴포넌트 하위에 헤더가 필요하면 헤더, 
Switch, Route 컴포넌트를 이용해서 주소와 컴포넌트를 연결 시킨다.

수업 에서는 Header 컴포넌트를 만들어 거기에 링크를 시켰다.

a 태그가 아닌 리다이렉트 없이 링크를 만드는 Link 컴포넌트를 불러와서
각각 헤더에 버튼을 생성하고, withRouter를 이용해서 location 정보를 받아
주소와 일치하는 버튼을 클릭 시 css에서 props를 삼항연산자로 확인해서 해당 버튼 하단에 
border-bottom 값으로 버튼 하단에 현재 페이지를 표시할 수 있도록 작성.

CSS style

styled-components에서 createGlobalStyle을, 
styled-reset 에서 기능을 import 해서 
globalStyle을 적용하는 컴포넌트를 작성,
App.js에 import 시켜서 필요한 부분에 글로벌로 적용.

styled-components 를 사용해서
필요한 컴포넌트에 태그별로 css를 작성.