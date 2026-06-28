import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { breakpoints } from "../../style/breakpoints";

// 선택된 토글 버튼이 통통 튀는 효과
const pop = keyframes`
  0% { transform: scale(0.8); }
  55% { transform: scale(1.18); }
  100% { transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 0;
  }
`;

const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  background-color: ${(props) => props.theme.Bg.Card_Primary};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.tabletS}px) {
    border-radius: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  flex-shrink: 0;
`;

const Title = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.Color.white};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Seg = styled.div`
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.Bg.InnerCard_Primary};
`;

const SegButton = styled.button<{ isActive: boolean }>`
  width: 36px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  background-color: ${(props) =>
    props.isActive ? props.theme.Bg.Button_Primary : "transparent"};
  color: ${(props) => (props.isActive ? "#ffffff" : props.theme.Color.Lnb)};
  animation: ${(props) => (props.isActive ? pop : "none")} 0.25s ease-out;
  &:hover {
    transform: scale(1.12);
    color: ${(props) => (props.isActive ? "#ffffff" : props.theme.Color.white)};
  }
  &:active {
    transform: scale(0.92);
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.Bg.InnerCard_Primary};
  color: ${(props) => props.theme.Color.white};
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(128, 128, 128, 0.35);
  }
`;

const Frame = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
`;

const ScrollIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="3" width="14" height="7" rx="1.5" />
    <rect x="5" y="14" width="14" height="7" rx="1.5" />
  </svg>
);

const SlideIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="7" y="5" width="10" height="14" rx="1.5" />
    <path d="M3.5 8v8M20.5 8v8" />
  </svg>
);

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;
  showModeToggle?: boolean;
  setIsHovering: Dispatch<SetStateAction<boolean>>;
}

function PortfolioModal({
  isOpen,
  onClose,
  src,
  title,
  showModeToggle = false,
  setIsHovering,
}: PortfolioModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mode, setMode] = useState<"scroll" | "slide">("scroll");

  // 헤더 인터랙티브 요소 hover 시 사이트 공용 커스텀 커서를 확대
  const hoverOn = () => setIsHovering(true);
  const hoverOff = () => setIsHovering(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  // 같은 출처(MUKI/StowGenie) 뷰어 로드 시: ESC 닫기 + 커스텀 커서 + 모드 동기화.
  // 교차 출처(드라이브 PDF 등)는 contentDocument 접근이 막혀 catch로 빠진다.
  const handleFrameLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    let doc: Document | null = null;
    try {
      doc = iframe.contentDocument;
    } catch {
      return;
    }
    if (!doc) return;

    // 1) iframe 안에 포커스가 있어도 ESC로 닫히도록
    doc.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    });

    // 2) 커스텀 커서: 뷰어의 OS 커서를 숨기고, mousemove를 부모 window로 좌표 보정해 재전파
    const style = doc.createElement("style");
    style.textContent = "*{cursor:none !important}";
    doc.head.appendChild(style);
    doc.addEventListener("mousemove", (e: MouseEvent) => {
      const r = iframe.getBoundingClientRect();
      window.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: r.left + e.clientX,
          clientY: r.top + e.clientY,
        })
      );
    });

    // 3) 모달 헤더 토글의 active 상태를 뷰어 실제 모드(localStorage 복원 포함)와 맞춤
    const m = doc.body?.dataset.mode;
    if (m === "slide" || m === "scroll") setMode(m);
  };

  // 모달 헤더 토글 → iframe 내부의 (숨겨진) seg 버튼을 클릭해 뷰어 setMode 로직을 그대로 재생
  const changeMode = (m: "scroll" | "slide") => {
    try {
      const btn = iframeRef.current?.contentDocument?.querySelector<HTMLButtonElement>(
        `.seg button[data-mode="${m}"]`
      );
      if (btn) btn.click();
    } catch {
      /* 교차 출처 — 무시 */
    }
    setMode(m);
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <HeaderRight>
            {showModeToggle && (
              <Seg role="group" aria-label="보기 방식">
                <SegButton
                  type="button"
                  isActive={mode === "scroll"}
                  onClick={() => changeMode("scroll")}
                  onMouseEnter={hoverOn}
                  onMouseLeave={hoverOff}
                  title="수직 스크롤"
                  aria-label="수직 스크롤"
                >
                  {ScrollIcon}
                </SegButton>
                <SegButton
                  type="button"
                  isActive={mode === "slide"}
                  onClick={() => changeMode("slide")}
                  onMouseEnter={hoverOn}
                  onMouseLeave={hoverOff}
                  title="페이지 슬라이드"
                  aria-label="페이지 슬라이드"
                >
                  {SlideIcon}
                </SegButton>
              </Seg>
            )}
            <CloseButton
              onClick={onClose}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
              aria-label="닫기"
            >
              ×
            </CloseButton>
          </HeaderRight>
        </Header>
        <Frame
          ref={iframeRef}
          src={src}
          title={title}
          onLoad={handleFrameLoad}
        />
      </Dialog>
    </Overlay>
  );
}

export default PortfolioModal;
