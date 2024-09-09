import PropTypes from 'prop-types';

/**
 * Creates Hangman drawing.
 * 
 * @param {number} wrongGuesses number of wrong guesses
 * 
 * @returns
 * 
 * @example
 * 
 * <HangmanDrawing wrongGuesses={3} /> 
 * 
*/

const HangmanDrawing = ({ wrongGuesses, ...props }) => {
    return (
        <div className="flex flex-col items-center mb-4 mt-4">
            {/* Gallows */}
            <div className="relative h-64 w-48">
                {/* Vertical Stand */}
                <div className="absolute left-4 bottom-0 w-2 h-64 bg-gray-400"></div>
                {/* Horizontal Beam */}
                <div className="absolute top-0 left-4 w-32 h-2 bg-gray-400"></div>
                {/* Rope */}
                <div className="absolute top-2 left-32 w-2 h-12 bg-gray-400"></div>


                {/* Hangman Parts */}
                {/* Head */}
                {wrongGuesses > 0 && (
                    <div className="absolute top-14 left-[7rem] w-10 h-10 border-4 border-gray-400 rounded-full"></div>    
                )}
                
                {/* Body */}
                {wrongGuesses > 1 && (
                    <div className="absolute top-24 left-[7.9rem] w-2 h-20 bg-gray-400"></div>
                )}

                {/* Left Arm */}
                {wrongGuesses > 2 && (
                    <div className="absolute top-28 left-[5.4rem] w-12 h-2 bg-gray-400 rotate-45"></div>
                )}

                {/* Right Arm */}
                {wrongGuesses > 3 && (
                    <div className="absolute top-28 left-[7.9rem] w-12 h-2 bg-gray-400 -rotate-45"></div>
                )}

                {/* Left Leg */}
                {wrongGuesses > 4 && (
                    <div className="absolute top-[11.8rem] left-[5.1rem] w-14 h-2 bg-gray-400 -rotate-45"></div>
                )}
                
                {/* Right Leg */}
                {wrongGuesses > 5 && (
                    <div className="absolute top-[11.8rem] left-[7.7rem] w-14 h-2 bg-gray-400 rotate-45"></div>
                )}
            </div>
        </div>
    );
};

HangmanDrawing.propTypes = {
    wrongGuesses: PropTypes.number,
};

export default HangmanDrawing;