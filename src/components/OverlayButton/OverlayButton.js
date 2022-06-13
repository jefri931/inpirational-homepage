import './OverlayButton.css'

export function OverlayButton({ visible, text, offsetY, offsetX, backgroundColor, onClick }) {
    return (
      <button
      className='overlay-button' 
        onClick={onClick}
        style={{ 
            visibility: visible ? 'visible' : 'hidden',
            top: offsetY,
            left: offsetX, 
            backgroundColor,
            }}>
            {text}
        </button>
    );
  }