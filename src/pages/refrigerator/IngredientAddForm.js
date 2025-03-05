import "./IngredientAddForm.css";
import Header from "../../components/common/header/Header";
import backArrow from "../../assets/backArrow.svg";
import close from "../../assets/close.svg";
import Input from "../../components/common/input/Input";
import SelectL from "../../components/common/select/SelectL";
import ButtonL from "../../components/common/button/ButtonL";
import Menu from "../../components/common/menu/Menu";
import imagePlus from "../../assets/imagePlus.svg";
import { useRef, useState } from "react";

const IngredientAddForm = () => {
  // 이미지 미리보기 상태 관리
  const [imagePreview, setImagePreview] = useState(null);
  // 파일 입력 요소 접근
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const mainOptions = [
    { value: "", label: "대분류" },
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
  ];
  const subOptions = [
    { value: "", label: "중분류" },
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
  ];
  const detailOptions = [
    { value: "", label: "소분류" },
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
  ];

  return (
    <>
      <Header
        leftIcon={backArrow}
        title="직접 입력하기"
        rightIcon={close}
        onLeftClick={() => window.history.back()}
        onRightClick={() => window.history.back()}
      />

      <div className="form-wrapper">
        <div className="form-container">
          <h3 className="form-label bold">식재료명</h3>
          <Input
            className="form-input"
            placeholder="식재료명을 입력해 주세요."
          />
        </div>

        <div className="form-container">
          <h3 className="form-label bold">사진 첨부</h3>
          <div
            className="image-upload-container"
            onClick={handleImageClick}
            style={{
              backgroundImage: imagePreview ? `url(${imagePreview})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!imagePreview && (
              <img
                src={imagePlus}
                alt="이미지 추가"
                className="image-plus-icon"
              />
            )}
            {/* 파일 입력 요소 */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className="form-container">
          <h3 className="form-label bold">유통기한</h3>
          <Input className="form-input" type="date" />
        </div>

        <div className="form-container">
          <h3 className="form-label bold">분류기준</h3>
          <div className="form-select-container">
            <SelectL options={mainOptions} className="select-item" />
            <SelectL options={subOptions} className="select-item" />
            <SelectL options={detailOptions} className="select-item" />
          </div>
        </div>

        <div className="form-container">
          <h3 className="form-label bold">중량</h3>
          <Input className="form-input" placeholder="중량을 입력해 주세요." />
        </div>
      </div>

      <div className="form-button-container">
        <ButtonL text="취소" variant="outlined" />
        <ButtonL text="등록하기" />
      </div>

      <div style={{ height: "100px" }}></div>

      <Menu />
    </>
  );
};

export default IngredientAddForm;
