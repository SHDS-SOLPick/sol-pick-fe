import React, { useState } from "react";
import "./AddPopup.css";
import { motion, AnimatePresence } from "framer-motion";
import closeIcon from "../../../assets/close.svg";
import ReceiptScanner from "../add/ReceiptScanner";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

const AddPopup = ({ isOpen, onClose }) => {
  const [scannerOpen, setScannerOpen] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleReceiptScanClick = () => {
    setScannerOpen(true);
  };

  const handleCloseScanner = () => {
    setScannerOpen(false);
  };

  const handleScanComplete = (receiptImage, ingredientNames = []) => {
    // OCR 처리 완료 후 다음 단계로 이동
    navigate("/refrigerator/add", {
      state: {
        fromReceipt: true,
        receiptData: {
          ingredientNames,
          receiptImage,
        },
      },
    });

    // 팝업 닫기
    setScannerOpen(false);
    onClose();
  };

  const handleManualInputClick = () => {
    // 직접 입력 페이지로 이동할 때 state 정보 같이 전달
    navigate("/refrigerator/add", {
      state: {
        fromReceipt: false, // 직접 입력 모드임을 명시
      },
    });
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <AnimatePresence>
        {isOpen && !scannerOpen && (
          <motion.div
            className="add-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          >
            <motion.div
              className="add-popup-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="add-popup-header">
                <h3 className="add-popup-title bold">
                  식재료 등록 방법을 선택해주세요
                </h3>
                <img
                  src={closeIcon}
                  alt="Close"
                  className="close-icon"
                  onClick={onClose}
                />
              </div>

              <div className="add-option-container">
                <div
                  className="add-option clickable"
                  onClick={handleReceiptScanClick}
                >
                  <div className="add-option-title bold">영수증 촬영하기</div>
                  <div className="add-option-description">
                    장보기 후 영수증만 찍으면 끝!
                    <br />
                    자동으로 상품명을 인식해 한 번에 등록할 수 있어요.
                  </div>
                </div>

                <div
                  className="add-option clickable"
                  onClick={handleManualInputClick}
                >
                  <div className="add-option-title bold">직접 입력하기</div>
                  <div className="add-option-description">
                    필요한 내용을 하나씩 꼼꼼히 기록하고
                    <br />
                    원하는 만큼 추가로 등록할 수 있어요.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scannerOpen && (
          <ReceiptScanner
            isOpen={scannerOpen}
            onClose={handleCloseScanner}
            onScanComplete={handleScanComplete}
          />
        )}
      </AnimatePresence>
    </>,
    document.getElementById("root")
  );
};

export default AddPopup;
