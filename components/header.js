import styles from '@/styles/Home.module.css'

export default function Header(){
  return (
    <>
      <header id="header">
        <div className="l-header_flex_inlineTop">
          <div className="l-header_addMargin l-addMaxWidth_x_center_y_column l-x_alignSide_y_center">
            <h1 className="c-header_logo"><a href="#area_top"><img class="c-header_logo l-x_center_y_center" src="/logo.svg" alt="ロゴ"/></a></h1>
            <nav className="p-header_nav">
              <ul className="c-header_nav_noStyle" id="scroll_nav">
                <li className="c-header_nav_x_right c-mediaOnly"><a href="#area_top">Top</a></li>
                <li className="c-header_nav_x_right"><a href="#area_profile">Profile</a></li>
                <li className="c-header_nav_x_right"><a href="#area_favorite">Work</a></li>
                <li className="c-header_nav_x_right"><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <button className="c-media_navButton">
          <span className="c-media_navButton_line"></span>
          <span>menu</span>
        </button>
      </header>
    </>
  );
}