import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>홈페이지입니다.</h1>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
      <Link to="/todo">투두리스트</Link>
    </div>
  )
}

export default Home;