import { TypeAnimation } from 'react-type-animation';
 
const TextTypeAnimation = ({sequence}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block' }}
    />
  );
};

export default TextTypeAnimation;