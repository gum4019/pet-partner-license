import { Link } from 'react-router-dom'

const Gnb = () => (
  <nav className="gnb">
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/study">공부하러 가기</Link>
      </li>
      <li>
        <Link to="/exam">시험 치러 가기</Link>
      </li>
    </ul>
  </nav>
)

export default Gnb
