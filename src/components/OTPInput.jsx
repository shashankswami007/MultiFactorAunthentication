import { useRef } from 'react';

const OTPInput = ({ length = 6, value, onChange }) => {
  const inputRefs = useRef([]);

  const handleOnChange = (e, index) => {
    const val = e.target.value;
    if (isNaN(val)) return;

    let newOTP = [...value];
    newOTP[index] = val.substring(val.length - 1);
    
    onChange(newOTP);

    if (val && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      let newOTP = [...value];
      
      if (newOTP[index]) {
        newOTP[index] = '';
        onChange(newOTP);
      } else if (index > 0) {
        newOTP[index - 1] = '';
        onChange(newOTP);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length).split('');
    if (pastedData.some(isNaN)) return;
    
    let newOTP = [...value];
    pastedData.forEach((char, i) => {
      newOTP[i] = char;
    });
    
    onChange(newOTP);
    
    // Focus last filled or next empty
    const focusIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[focusIndex].focus();
  };

  return (
    <div className="flex justify-center items-center gap-2 my-6">
      {value.map((_, index) => {
        return (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            className="w-12 h-14 border-2 rounded-lg bg-transparent outline-none text-center font-bold text-xl border-slate-300 focus:border-indigo-500 focus:text-indigo-600 focus:ring-4 focus:ring-indigo-100 text-slate-800 transition-all duration-200"
            onChange={(e) => handleOnChange(e, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            onPaste={handlePaste}
            value={value[index] || ''}
            onFocus={(e) => e.target.select()}
            maxLength={1}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
