import React, { useState } from "react";
import "./CardIdentityVerification.css";

const CardIdentityVerificationPage = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    firstName: "",
    residentId: "",
    telecom: "KT",
    phoneNumber: "",
    verificationCode: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showVerificationField, setShowVerificationField] = useState(false);

  // 입력 필드 변경 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 인증 요청 처리
  const handleRequestVerification = () => {
    // 실제로는 여기서 인증 번호를 요청하는 API 호출
    setShowVerificationField(true);
  };

  // 인증 완료 처리
  const handleCompleteVerification = () => {
    // 실제로는 여기서 인증 번호를 검증하는 API 호출
    // 부모 컴포넌트로 완료 이벤트 전달
    if (onComplete && typeof onComplete === "function") {
      onComplete();
    }
  };

  return (
    <div className="identity-verification-content">
      <h2 className="content-title">본인 인증해 주세요</h2>

      {/* 이름 입력 */}
      <div className="input-section">
        <label>이름</label>
        <input
          type="text"
          name="name"
          placeholder="이름 입력"
          value={formData.name}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      {/* 영문 성 입력 */}
      <div className="input-section">
        <label>영문 성</label>
        <input
          type="text"
          name="lastName"
          placeholder="EX) HONG"
          value={formData.lastName}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      {/* 영문 이름 입력 */}
      <div className="input-section">
        <label>영문 이름</label>
        <input
          type="text"
          name="firstName"
          placeholder="EX) GILDONG"
          value={formData.firstName}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      {/* 주민등록번호(외국인등록번호) 입력 */}
      <div className="input-section">
        <label>주민등록번호(외국인등록번호)</label>
        <div className="resident-id-input">
          <input
            type="text"
            name="residentId"
            placeholder="생년월일 6자리"
            maxLength="6"
            value={formData.residentId}
            onChange={handleInputChange}
            className="input-field birth-date"
          />
          <span className="separator">-</span>
          <div className="masked-input">
            <input
              type="password"
              maxLength="7"
              className="input-field masked"
              readOnly
              value="•••••••"
            />
          </div>
        </div>
      </div>

      {/* 휴대폰 인증 */}
      <div className="input-section">
        <label>휴대폰 인증</label>
        <div className="telecom-selection">
          <select
            name="telecom"
            value={formData.telecom}
            onChange={handleInputChange}
            className="telecom-select"
          >
            <option value="KT">KT 알뜰폰</option>
            <option value="SKT">SKT</option>
            <option value="LGU+">LGU+</option>
          </select>
          <svg
            className="dropdown-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M5 8L10 13L15 8" stroke="black" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="phone-verification">
          <input
            type="text"
            name="phoneNumber"
            placeholder="휴대폰 11자리"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="input-field phone-number"
          />
          <button
            className="verification-request-button"
            onClick={handleRequestVerification}
          >
            인증 요청
          </button>
        </div>
      </div>

      {/* 인증 번호 입력 필드 (인증 요청 후 표시) */}
      {showVerificationField && (
        <div className="input-section">
          <input
            type="text"
            name="verificationCode"
            placeholder="인증 번호 입력"
            value={formData.verificationCode}
            onChange={handleInputChange}
            className="input-field verification-code"
          />
        </div>
      )}

      {/* 본인 확인 약관 동의 */}
      <div className="terms-agreement">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
            className="checkbox-input"
          />
          <span className="custom-checkbox"></span>
          <span className="checkbox-label">
            본인 확인을 위한 약관 모두 동의
          </span>
        </label>
        <svg
          className="dropdown-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      {/* 하단 버튼 섹션 */}
      <div className="verification-footer">
        <button
          className="next-button"
          onClick={handleCompleteVerification}
          disabled={
            !showVerificationField ||
            !formData.verificationCode ||
            !agreeToTerms
          }
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default CardIdentityVerificationPage;
