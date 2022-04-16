# 9-JSProjects
HTML, CSS, JS 를 사용한 간단한 웹 어플리케이션 9가지입니다.<br>

## 1. Quiz-APP
- 사용자가 지정한 퀴즈가 출제되며 답이 맞은 경우 점수 추가, 틀린 경우 -1 점.<br>
- 문제는 4개의 보기중에 하나를 선택해 제출합니다. 문제를 다 풀면 점수가 표시됩니다.<br><br>

## 2. Recipe APP
출처:'https://www.themealdb.com/api/json/v1/1/random.php'<br>
- 음식 레시피를 DB에서 불러와 랜덤하게 음식 사진과 이름이 출력됩니다.<br>
- 하트 버튼을 눌러 favorite 목록에 해당 음식을 추가할 수 있습니다.<br>
- favorite 목록의 음식아래 x버튼을 눌러 제거할 수 있습니다.<br><br>

## 3. Note-App
- 노트에 글을 쓰고 저장하면, Mark Down 으로 출력됩니다.
- CRUD 기능 구현
- localStorage 를 활용합니다. (2. Recipe App과 동일)<br><br>

## 4. Todos-App
- write todo list
- 완료된 일은 좌클릭해 선으로 그을 수 있다.
- 하나 list를 우클릭해 지울 수 있다.<br><br>

## 5. Movie-app
실행 결과: file:///C:/Users/matt1/OneDrive/JS-Project/movie-app/index.html<br>
DB 출처:  themoviedb
APIURL = https://api.themoviedb.org<br>
SEARCHAPI = https://api.themoviedb.org/3/search/movie<br>
> moviedb 의 api를 활용해 만든 어플리케이션입니다.
> api를 사용하기 위해서 api key를 발급받아 데이터베이스를 이용했습니다. 
> REST API 를 이용할 경우  세션 ID, request_token 을 발급받아 사용해야 합니다.

### 작동방식
- Movie database 에서 유명한 영화 20개를 추출해 출력. 1페이지를 출력하며 총 500페이지까지 존재한다.<br>
- 각 영화의 이름과 평점이 표시됩니다. 평점에 따라 평점이 다른 색으로 표시됩니다.<br>
- 위의 search 바에 원하는 영화의 이름을 입력해 Search 할 수 있습니다. 한 페이지에 20개 표시됩니다.<br>
- 마우스를 갖다 대면 영화의 개요가 나타납니다.<br><br>
