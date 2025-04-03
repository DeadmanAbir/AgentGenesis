import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TextShimmer } from './generate-text';

const LinkedAgentEffect = () => {
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
  const scaleValue = buttonClicked ? 0.9 : 1;
  const backgroundColorValue = isGenerating ? '#4a5568' : '#374151';
  console.log(showOutput);
  return (
    <div className="w-full">
      <div className=" mx-auto ">
        <AnimatePresence mode="wait">
          {showInput ? (
            <motion.div
              key="input"
              className="flex flex-col items-center gap-3 mb-6 bg-zinc-900 p-4 rounded-lg h-60"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
            >
              <div className="relative flex-1 h-60 bg-zinc-800 rounded overflow-hidden p-3 w-full">
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
                className="px-4 py-1  rounded-lg text-sm cursor-pointer select-none"
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
              id="tabs"
              className="bg-zinc-800 rounded p-3 w-full h-80 overflow-auto tabs"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              exit={{ opacity: 0, y: 20 }}
            >
              <table className="w-full border-collapse border border-zinc-700 text-sm font-mono">
                <thead>
                  <tr className="bg-zinc-700 text-white">
                    <th className="border border-zinc-600 px-3 py-2">Field</th>
                    <th className="border border-zinc-600 px-3 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedKeys.map((key) => {
                    const value =
                      jsonOutput[key as keyof typeof jsonOutput] ?? 'N/A';
                    return (
                      <motion.tr
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border border-zinc-700"
                      >
                        <td className="border border-zinc-600 px-3 py-2 text-blue-300">
                          {key}
                        </td>
                        <td className="border border-zinc-600 px-3 py-2 text-green-300">
                          {Array.isArray(value) ? (
                            <ul className="list-disc ml-4">
                              {value.map((item, i) => (
                                <li key={i} className="text-white">
                                  {typeof item === 'object'
                                    ? Object.entries(item)
                                        .map(
                                          ([subKey, subValue]) =>
                                            `${subKey}: ${subValue}`,
                                        )
                                        .join(', ')
                                    : item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            value.toString()
                          )}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LinkedAgentEffect;
