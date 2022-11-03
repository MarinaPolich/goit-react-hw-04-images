import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBox, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = ({ code }) => code === 'Escape' && onClose();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = ({ currentTarget, target }) =>
    currentTarget === target && onClose();

  return createPortal(
    <Overlay onClick={handleClick}>
      <ModalBox>
        <img src={src} alt={alt} />
      </ModalBox>
    </Overlay>,
    modalRoot
  );
};
// export class ModalOld extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { src, alt } = this.props;
//     return createPortal(
//       <Overlay onClick={this.handleClick}>
//         <ModalBox>
//           <img src={src} alt={alt} />
//         </ModalBox>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
