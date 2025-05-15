import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import HorizontalLine from "../HorizontalLine";

const Footer = () => {
  const { colorMode } = useColorMode();
  const [emoji, setEmoji] = useState("🔮");

  const handleEmojiHover = () => {
    setEmoji("✨");
    setTimeout(() => setEmoji("🔮"), 1000);
  };

  const handleMyUpdatesClick = () => {
    window.open("https://x.com/aryanbedi", "_blank");
  };

  const lastUpdated = "May 2025";

  return (
    <>
      <Box maxW="1200px" mx="auto" px={4}>
        <div className="footer-container">
          <div className="left-content">
            <p
              className="updated"
              style={{
                color: colorMode === "light" ? "gray.500" : "#718196",
              }}
            >
              {`Updated: ${lastUpdated}`}
            </p>
          </div>

          <div className="right-content">
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <a href="https://www.linkedin.com/in/aryanbedi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: colorMode === "light" ? "#6B46C1" : "white" }}>
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/aryan_bedi_" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: colorMode === "light" ? "#6B46C1" : "white" }}>
                <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1199.97 0.013916H950.684L599.985 464.527L249.316 0.013916H0.0297852L483.684 630.527L0 1226.99H249.316L599.985 762.527L950.684 1226.99H1199.97L716.316 630.527L1199.97 0.013916ZM872.632 1120.99L599.985 755.527L327.368 1120.99H124.632L599.985 505.527L1075.37 1120.99H872.632Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://github.com/aryanbedi19" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: colorMode === "light" ? "#6B46C1" : "white" }}>
                <FaGithub size={20} />
              </a>
              <a href="mailto:apbedi19@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={{ color: colorMode === "light" ? "#6B46C1" : "white" }}>
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <HorizontalLine />

        <p
          className="emoji"
          role="img"
          aria-label="Basketball"
          onMouseEnter={handleEmojiHover}
        >
          🏀
        </p>

        <p
          style={{
            color: colorMode === "light" ? "gray.500" : "#718196",
            fontSize: "0.7rem",
          }}
          className="designed"
        >
          © Designed and built by Aryan Bedi (took some inspo from matt&apos;s website)
        </p>
      </Box>

      <style jsx>{`
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-top: 1px solid #eaeaea;

          @media (max-width: 600px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 0;
          }
        }

        p {
          margin: 0;
          font-size: 0.875rem;
          text-align: center;
        }

        .updated {
          font-size: 1rem;
          font-weight: bold;
          color: #555;
        }

        .my-updates {
          font-size: 1rem;
          font-weight: bold;
          color: #6b46c1;
          cursor: pointer;
          transition: color 0.2s ease, transform 0.2s ease;

          @media (max-width: 600px) {
            margin-top: 10px;
          }
        }

        .my-updates:hover {
          color: #9f7aea;
          transform: translateY(-2px);
        }

        .my-updates span {
          font-size: 0.75rem;
          color: #555;
        }

        .emoji {
          font-size: 2rem;
          margin-bottom: -0.75rem;
          margin-top: 3rem;
        }

        .designed {
          font-size: 0.875rem;
          margin-top: 1rem;
          margin-bottom: 3rem;
          text-align: center;
          font-weight: bold;
          color: #555;

          @media (max-width: 600px) {
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
