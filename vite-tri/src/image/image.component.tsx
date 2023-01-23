import './image.component.css';
import reactLogo from '../assets/react.svg';

export function Test() {
  return (
    <>
      <div>
        <span>css/画像 読み込みチェック用コンポーネント</span><br />
        <span><img className="react-logo" src={reactLogo.toString()} /></span>
        {/* <span><img className="react-logo" src='../assets/react.svg' /></span> */}
      </div>
    </>
  );
}
