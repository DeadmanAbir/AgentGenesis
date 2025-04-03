import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TextShimmer } from './generate-text';

const LinkedToolEffect = () => {
  const [showInput, setShowInput] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [displayedKeys, setDisplayedKeys] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputText, setInputText] = useState(
    'https://www.linkedin.com/in/abir-dutta-408759223/',
  );

  const jsonOutput = {
    public_identifier: 'abir-dutta-408759223',
    first_name: 'Abir',
    last_name: 'Dutta',
    full_name: 'Abir Dutta',
    follower_count: 1265,
    occupation: 'Founding Member at Kirak.ai',
    headline: '💻 Full Stack Developer | ✍🏻 Technical Writer | 🌐 Open Source',
    country: 'IN',
    city: 'New Delhi',
    experiences: [
      {
        company: 'Kirak.ai',
        title: 'Founding Member',
      },
    ],
    education: [
      {
        degree_name: 'B.Tech',
        school: 'Guru Gobind Singh Indraprastha University',
      },
    ],
  };

  // Keys to display in order
  const keysToAnimate = [
    'full_name',
    'headline',
    'occupation',
    'follower_count',
    'country',
    'city',
    'experiences',
    'education',
  ];

  // Auto-start the loop on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Complete animation cycle function
  const startAnimation = () => {
    if (showInput) {
      simulateEnterPress();
    }
  };

  const simulateEnterPress = () => {
    // First indicate button press
    setButtonClicked(true);

    // After a brief moment, start text processing
    setTimeout(() => {
      setButtonClicked(false);
      setIsGenerating(true);

      // Start fading out the input text
      const fadeTextInterval = setInterval(() => {
        setInputText((prev) => {
          if (prev.length <= 5) {
            clearInterval(fadeTextInterval);
            return '';
          }
          return prev.substring(0, prev.length - 5);
        });
      }, 100);

      // Start transition animation after text processing
      setTimeout(() => {
        setShowInput(false);

        // Show output and start JSON animation
        setTimeout(() => {
          setShowOutput(true);
          setDisplayedKeys([]);
          animateKeys();
        }, 500);
      }, 1500);
    }, 200);
  };

  const animateKeys = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < keysToAnimate.length) {
        setDisplayedKeys((prev) => [...prev, keysToAnimate[index]]);
        index++;
      } else {
        clearInterval(interval);

        // Auto reset after displaying all keys
        setTimeout(() => {
          resetAnimation();
        }, 2000);
      }
    }, 300);
  };

  const resetAnimation = () => {
    setShowOutput(false);

    // Reset to input view after exit animation
    setTimeout(() => {
      setInputText('https://www.linkedin.com/in/abir-dutta-408759223/');
      setIsGenerating(false);
      setShowInput(true);

      // Restart the cycle
      setTimeout(() => {
        startAnimation();
      }, 2000);
    }, 500);
  };

  // Format JSON value based on type
  const formatValue = (key: any, value: any) => {
    if (Array.isArray(value)) {
      return (
        <div className="ml-4 mt-1">
          {value.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-zinc-700 p-2 rounded-md mb-2"
            >
              {typeof item === 'object'
                ? Object.entries(item).map(([subKey, subValue]) => (
                    <div key={subKey} className="text-sm">
                      <span className="text-blue-300">{subKey}:</span>{' '}
                      <span className="text-green-300">{String(subValue)}</span>
                    </div>
                  ))
                : String(item)}
            </motion.div>
          ))}
        </div>
      );
    }

    return typeof value === 'string' ? (
      <span className="text-green-300">"{value}"</span>
    ) : (
      <span className="text-yellow-300">{String(value)}</span>
    );
  };
  const scaleValue = buttonClicked ? 0.9 : 1;
  const backgroundColorValue = isGenerating ? '#4a5568' : '#374151';
  console.log(showOutput);
  return (
    <div className="w-full">
      <div className=" mx-auto">
        <AnimatePresence mode="wait">
          {showInput ? (
            <motion.div
              key="input"
              className="flex flex-col items-center gap-3 mb-6 bg-zinc-900 p-4 rounded-lg h-36"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
            >
              <div className="relative flex-1 h-40 bg-zinc-800 rounded overflow-hidden p-3 w-full">
                <motion.div
                  className="text-white"
                  animate={{
                    opacity: isGenerating ? 0.5 : 0.8,
                    color: isGenerating ? '#8a8a8a' : '#ffffff',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {inputText}
                </motion.div>

                {/* {isGenerating && (
                  <motion.div 
                    className="absolute top-12 left-0 right-0 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TextShimmer className="font-mono text-blue-400" duration={1.5}>
                      Fetching profile data...
                    </TextShimmer>
                  </motion.div>
                )} */}
              </div>

              <motion.div
                className="px-4 py-1 bg-zinc-700 rounded text-sm cursor-pointer select-none"
                animate={{
                  scale: isGenerating ? 0.95 : scaleValue,
                  backgroundColor: backgroundColorValue,
                }}
                transition={{ duration: 0.1 }}
              >
                {isGenerating ? (
                  <TextShimmer className="font-mono text-sm" duration={1}>
                    Processing...
                  </TextShimmer>
                ) : (
                  <span>Enter ↵</span>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="output"
              className="bg-zinc-800  rounded-lg shadow-lg p-3 w-full h-80 overflow-auto"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="font-mono text-sm">
                <div className="mb-2 text-purple-300">{'{'}</div>

                {displayedKeys.map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 mb-1"
                  >
                    <span className="text-blue-300">"{key}"</span>
                    <span className="text-white">: </span>
                    {formatValue(
                      key,
                      jsonOutput[key as keyof typeof jsonOutput],
                    )}
                    {index < displayedKeys.length - 1 && (
                      <span className="text-white">,</span>
                    )}
                  </motion.div>
                ))}

                <div className="text-purple-300">{'}'}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LinkedToolEffect;
