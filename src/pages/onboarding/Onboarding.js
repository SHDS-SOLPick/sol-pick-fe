import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Onboarding.css";
import igloo from "../../assets/logo/igloo.png";

const Onboarding = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // 3초 후에 페이드아웃 애니메이션 시작
    const timer = setTimeout(() => {
      setOpacity(0);

      // 애니메이션 완료 후 네비게이션
      setTimeout(() => {
        navigate("/main");
      }, 800); // 애니메이션 지속 시간
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="onboarding-container"
      animate={{ opacity }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={igloo}
        alt="solpickLogo"
        className="solpick-logo"
        animate={{
          scale: [0.7, 1.05, 0.95, 1],
          opacity: [0, 1, 1, 1],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.7, 1],
        }}
      />
    </motion.div>
  );
};

export default Onboarding;
