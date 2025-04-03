import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LinkedToolEffect = () => {
  const [showInput, setShowInput] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [displayedKeys, setDisplayedKeys] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Complete animation cycle function
  const startAnimation = () => {
    if (showInput) {
      simulateEnterPress();
    }
  };

  const simulateEnterPress = () => {
    // Simulate button press effect
    setIsGenerating(true);

    // Start transition animation after a short delay
    setTimeout(() => {
      setShowInput(false);

      // Show output and start JSON animation
      setTimeout(() => {
        setShowOutput(true);
        setDisplayedKeys([]);
        animateKeys();
      }, 500);
    }, 1000);
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
      setIsGenerating(false);
      setShowInput(true);

      // Restart the cycle
      setTimeout(() => {
        startAnimation();
      }, 1500);
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
              className="bg-neutral-700 p-2 rounded-md mb-2"
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
  console.log(showOutput);
  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {showInput ? (
            <motion.div
              key="input"
              className="flex flex-col items-center gap-3 mb-6 bg-neutral-900 p-4 rounded-lg h-36"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
            >
              <div className="relative flex-1 h-40 bg-neutral-800 rounded overflow-hidden p-3 w-full">
                <div className="text-white opacity-80">
                  https://www.linkedin.com/in/abir-dutta-408759223/
                </div>
              </div>

              <motion.div
                className="px-4 py-1 bg-neutral-700 rounded text-sm"
                animate={{ scale: isGenerating ? 0.95 : 1 }}
                transition={{ duration: 0.1 }}
              >
                {isGenerating ? (
                  <span className="text-blue-300">Processing...</span>
                ) : (
                  <span>Enter ↵</span>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="output"
              className="bg-neutral-800 rounded p-3 w-full h-80 overflow-auto"
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
                    {formatValue(key, jsonOutput[key])}
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
