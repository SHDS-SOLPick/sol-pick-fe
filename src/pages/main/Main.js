import "./Main.css";
import MainHeader from "../../components/common/header/MainHeader";
import noti from "../../assets/noti.svg";
import notiActive from "../../assets/notiActive.svg";
import shop from "../../assets/shop.svg";
import shopActive from "../../assets/shopActive.svg";
import EventSection from "../../components/main/event-card/EventCard";
import Menu from "../../components/common/menu/Menu";

const Main = () => {
  const navigateToShop = () => {};

  const navigateToNoti = () => {};

  const promo = [
    {
      title: "PROMOTION",
      description:
        "ReciPICK X 신한카드\nSOL Pick 카드 발급받고\n포인트 챙겨가세요!",
      image: "image-url",
      bgColor: "#FFFAC6",
    },
  ];

  const benefit = [
    {
      title: "NEW ARRIVAL",
      description: "새로 입고된\n봄 시즌 한정 식재료를\n만나보세요!",
      image: "image-url",
      bgColor: "#FFFAC6",
      additionalDate: "2025. 3. 3 (월) - 4. 14 (월)",
    },
    {
      title: "DEAL",
      description: "연휴 기간 동안\n최대 50% 할인!",
      image: "image-url",
      bgColor: "#FFE9E9",
      additionalDate: "2025. 3. 1 (토) - 3. 3 (월)",
    },
  ];

  const event = [
    {
      title: "EVENT",
      description: "게임 한 판에\n포인트 혜택을 받아보세요!",
      image: "image-url",
      bgColor: "#FFFAC6",
    },
  ];

  const news = [
    {
      title: "NEWS",
      description: "저속노화의 비법\n같이 알아봐요!",
      image: "image-url",
      bgColor: "#FFE9E9",
    },
  ];

  return (
    <>
      <MainHeader
        leftIcon={shop}
        leftIconActive={shopActive}
        rightIcon={noti}
        rightIconActive={notiActive}
        onLeftClick={navigateToShop}
        onRightClick={navigateToNoti}
      />

      <p className="greeting-ment bold">
        설렘 가득한 발걸음으로 <br /> 하루를 시작해 볼까요?
      </p>

      <EventSection
        sectionTitle="레시픽 회원이라면 이 카드 어떠세요?"
        events={promo}
      />

      <EventSection sectionTitle="봄 시즌 특별 혜택" events={benefit} />

      <EventSection
        sectionTitle="SOL Pick 고객님만을 위한 특별한 이벤트"
        events={event}
      />

      <EventSection sectionTitle="오늘의 영양 뉴스" events={news} />

      <div style={{ height: "76px" }}></div>

      <Menu />
    </>
  );
};
export default Main;
