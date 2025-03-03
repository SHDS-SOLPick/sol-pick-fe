import { useState } from "react";
import "./Menu.css";
import refrigerator from "../../../assets/refrigerator.svg";
import refrigeratorActive from "../../../assets/refrigeratorActive.svg";
import card from "../../../assets/card.svg";
import cardActive from "../../../assets/cardActive.svg";
import home from "../../../assets/home.svg";
import homeActive from "../../../assets/homeActive.svg";
import mypage from "../../../assets/mypage.svg";
import mypageActive from "../../../assets/mypageActive.svg";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const menuItems = [
    {
      id: "home",
      icon: home,
      activeIcon: homeActive,
      label: "홈",
    },
    {
      id: "card",
      icon: card,
      activeIcon: cardActive,
      label: "카드",
    },
    {
      id: "refrigerator",
      icon: refrigerator,
      activeIcon: refrigeratorActive,
      label: "냉장고",
    },
    {
      id: "mypage",
      icon: mypage,
      activeIcon: mypageActive,
      label: "마이페이지",
    },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    // 페이지 이동 작업
  };

  return (
    <nav className="menu-container">
      <div className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
            onClick={() => handleMenuClick(item.id)}
          >
            <img
              src={activeMenu === item.id ? item.activeIcon : item.icon}
              alt={item.label}
              className="menu-icon"
            />
            <span className="menu-label">{item.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
