import React, { useState } from 'react'
import './EnglishTest.css'

function EnglishTest() {
  const [answers, setAnswers] = useState({
    fill1: '',
    fill2: '',
    fill3: '',
    fill4: '',
    tf1: '',
    tf2: '',
    tf3: '',
    tf4: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState(null)

  // Correct answers
  const correctAnswers = {
    fill1: 'sustainable',
    fill2: 'renewable',
    fill3: 'carbon',
    fill4: 'efficiency',
    tf1: 'true',
    tf2: 'false',
    tf3: 'not given',
    tf4: 'true',
  }

  const handleInputChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value.toLowerCase().trim()
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    
    const score = {
      correct: 0,
      incorrect: 0,
      total: 8,
      details: {}
    }

    // Check fill-in-the-blank answers
    Object.keys(correctAnswers).forEach(key => {
      if (answers[key] === correctAnswers[key]) {
        score.correct++
        score.details[key] = { correct: true, userAnswer: answers[key], correctAnswer: correctAnswers[key] }
      } else {
        score.incorrect++
        score.details[key] = { correct: false, userAnswer: answers[key] || '(not answered)', correctAnswer: correctAnswers[key] }
      }
    })

    setResults(score)
  }

  const handleReset = () => {
    setAnswers({
      fill1: '',
      fill2: '',
      fill3: '',
      fill4: '',
      tf1: '',
      tf2: '',
      tf3: '',
      tf4: '',
    })
    setSubmitted(false)
    setResults(null)
  }

  return (
    <div className="test-container">
      <div className="test-header">
        <h1>English Level Test</h1>
        <p className="test-subtitle">Upper Intermediate to Advanced Level</p>
      </div>

      <div className="test-content">
        {/* Reading Passage - Left Side */}
        <div className="reading-passage">
          <h2>The Future of Sustainable Energy</h2>
          <div className="passage-text">
            <p>
              As the global population continues to expand and industrialisation reaches unprecedented 
              levels, the demand for energy has become one of the most pressing challenges of the 21st 
              century. Traditional fossil fuels, while having powered economic growth for over a century, 
              are now recognised as fundamentally unsustainable due to their finite nature and 
              devastating environmental impact. The transition towards <strong>sustainable</strong> energy 
              sources is no longer a matter of choice but an absolute necessity.
            </p>
            <p>
              <strong>Renewable</strong> energy technologies, including solar, wind, and hydroelectric 
              power, have experienced remarkable technological advancements in recent decades. Solar panel 
              efficiency has increased dramatically, while the cost of production has decreased 
              substantially, making solar energy increasingly competitive with conventional power sources. 
              Similarly, wind turbines have become more sophisticated, capable of generating electricity 
              even in areas with moderate wind speeds.
            </p>
            <p>
              However, the integration of renewable energy into existing power grids presents significant 
              challenges. The intermittent nature of solar and wind power requires sophisticated energy 
              storage solutions. Battery technology has made considerable progress, but the development 
              of large-scale storage systems remains a critical area of research. Additionally, the 
              reduction of <strong>carbon</strong> emissions requires not only the adoption of clean energy 
              but also improvements in energy <strong>efficiency</strong> across all sectors of the economy.
            </p>
            <p>
              Governments worldwide are implementing policies to accelerate the transition to clean energy. 
              These include subsidies for renewable energy projects, carbon pricing mechanisms, and 
              regulations that phase out coal-fired power plants. The private sector has also responded 
              enthusiastically, with major corporations committing to carbon neutrality targets and 
              investing heavily in renewable energy infrastructure.
            </p>
            <p>
              Despite these positive developments, critics argue that the transition is happening too 
              slowly. They point to the continued construction of fossil fuel infrastructure and the 
              persistent subsidies that favour traditional energy sources. Nevertheless, the momentum 
              towards sustainable energy appears irreversible, driven by both environmental concerns and 
              economic incentives.
            </p>
          </div>
        </div>

        {/* Questions - Right Side */}
        <div className="questions-panel">
          <form onSubmit={handleSubmit} className="test-form">
            <div className="question-section">
              <h3>Fill in the Blanks</h3>
              <p className="instruction">Complete the sentences using words from the passage.</p>
              
              <div className="question-item">
                <label>
                  1. The transition towards <input
                    type="text"
                    value={answers.fill1}
                    onChange={(e) => handleInputChange('fill1', e.target.value)}
                    disabled={submitted}
                    className={submitted ? (results?.details.fill1.correct ? 'correct' : 'incorrect') : ''}
                  /> energy sources is an absolute necessity.
                </label>
                {submitted && (
                  <div className={`answer-feedback ${results.details.fill1.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.fill1.correct ? '✓ Correct' : `✗ Incorrect. Correct answer: ${results.details.fill1.correctAnswer}`}
                  </div>
                )}
              </div>

              <div className="question-item">
                <label>
                  2. <input
                    type="text"
                    value={answers.fill2}
                    onChange={(e) => handleInputChange('fill2', e.target.value)}
                    disabled={submitted}
                    className={submitted ? (results?.details.fill2.correct ? 'correct' : 'incorrect') : ''}
                  /> energy technologies have experienced remarkable advancements.
                </label>
                {submitted && (
                  <div className={`answer-feedback ${results.details.fill2.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.fill2.correct ? '✓ Correct' : `✗ Incorrect. Correct answer: ${results.details.fill2.correctAnswer}`}
                  </div>
                )}
              </div>

              <div className="question-item">
                <label>
                  3. The reduction of <input
                    type="text"
                    value={answers.fill3}
                    onChange={(e) => handleInputChange('fill3', e.target.value)}
                    disabled={submitted}
                    className={submitted ? (results?.details.fill3.correct ? 'correct' : 'incorrect') : ''}
                  /> emissions requires improvements in energy efficiency.
                </label>
                {submitted && (
                  <div className={`answer-feedback ${results.details.fill3.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.fill3.correct ? '✓ Correct' : `✗ Incorrect. Correct answer: ${results.details.fill3.correctAnswer}`}
                  </div>
                )}
              </div>

              <div className="question-item">
                <label>
                  4. Improvements in energy <input
                    type="text"
                    value={answers.fill4}
                    onChange={(e) => handleInputChange('fill4', e.target.value)}
                    disabled={submitted}
                    className={submitted ? (results?.details.fill4.correct ? 'correct' : 'incorrect') : ''}
                  /> are needed across all sectors.
                </label>
                {submitted && (
                  <div className={`answer-feedback ${results.details.fill4.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.fill4.correct ? '✓ Correct' : `✗ Incorrect. Correct answer: ${results.details.fill4.correctAnswer}`}
                  </div>
                )}
              </div>
            </div>

            <div className="question-section">
              <h3>True / False / Not Given</h3>
              <p className="instruction">Write TRUE if the statement agrees with the information, FALSE if it contradicts, or NOT GIVEN if there is no information.</p>
              
              <div className="question-item">
                <label>
                  5. Solar panel efficiency has increased while production costs have decreased.
                </label>
                <div className="tf-options">
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf1"
                      value="true"
                      checked={answers.tf1 === 'true'}
                      onChange={(e) => handleInputChange('tf1', e.target.value)}
                      disabled={submitted}
                    />
                    True
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf1"
                      value="false"
                      checked={answers.tf1 === 'false'}
                      onChange={(e) => handleInputChange('tf1', e.target.value)}
                      disabled={submitted}
                    />
                    False
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf1"
                      value="not given"
                      checked={answers.tf1 === 'not given'}
                      onChange={(e) => handleInputChange('tf1', e.target.value)}
                      disabled={submitted}
                    />
                    Not Given
                  </label>
                </div>
                {submitted && (
                  <div className={`answer-feedback ${results.details.tf1.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.tf1.correct ? '✓ Correct' : `✗ Incorrect. Your answer: ${results.details.tf1.userAnswer}. Correct answer: ${results.details.tf1.correctAnswer}`}
                  </div>
                )}
              </div>

              <div className="question-item">
                <label>
                  6. All renewable energy sources are now cheaper than fossil fuels.
                </label>
                <div className="tf-options">
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf2"
                      value="true"
                      checked={answers.tf2 === 'true'}
                      onChange={(e) => handleInputChange('tf2', e.target.value)}
                      disabled={submitted}
                    />
                    True
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf2"
                      value="false"
                      checked={answers.tf2 === 'false'}
                      onChange={(e) => handleInputChange('tf2', e.target.value)}
                      disabled={submitted}
                    />
                    False
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf2"
                      value="not given"
                      checked={answers.tf2 === 'not given'}
                      onChange={(e) => handleInputChange('tf2', e.target.value)}
                      disabled={submitted}
                    />
                    Not Given
                  </label>
                </div>
                {submitted && (
                  <div className={`answer-feedback ${results.details.tf2.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.tf2.correct ? '✓ Correct' : `✗ Incorrect. Your answer: ${results.details.tf2.userAnswer}. Correct answer: ${results.details.tf2.correctAnswer}`}
                  </div>
                )}
              </div>

              <div className="question-item">
                <label>
                  7. Nuclear energy is mentioned as a viable alternative to fossil fuels.
                </label>
                <div className="tf-options">
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf3"
                      value="true"
                      checked={answers.tf3 === 'true'}
                      onChange={(e) => handleInputChange('tf3', e.target.value)}
                      disabled={submitted}
                    />
                    True
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf3"
                      value="false"
                      checked={answers.tf3 === 'false'}
                      onChange={(e) => handleInputChange('tf3', e.target.value)}
                      disabled={submitted}
                    />
                    False
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf3"
                      value="not given"
                      checked={answers.tf3 === 'not given'}
                      onChange={(e) => handleInputChange('tf3', e.target.value)}
                      disabled={submitted}
                    />
                    Not Given
                  </label>
                </div>
                {submitted && (
                  <div className={`answer-feedback ${results.details.tf3.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.tf3.correct ? '✓ Correct' : `✗ Incorrect. Your answer: ${results.details.tf3.userAnswer}. Correct answer: ${results.details.tf3.correctAnswer}`}
                  </div>
                )}
              </div>

              <div className="question-item">
                <label>
                  8. Major corporations are investing in renewable energy infrastructure.
                </label>
                <div className="tf-options">
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf4"
                      value="true"
                      checked={answers.tf4 === 'true'}
                      onChange={(e) => handleInputChange('tf4', e.target.value)}
                      disabled={submitted}
                    />
                    True
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf4"
                      value="false"
                      checked={answers.tf4 === 'false'}
                      onChange={(e) => handleInputChange('tf4', e.target.value)}
                      disabled={submitted}
                    />
                    False
                  </label>
                  <label className="tf-option">
                    <input
                      type="radio"
                      name="tf4"
                      value="not given"
                      checked={answers.tf4 === 'not given'}
                      onChange={(e) => handleInputChange('tf4', e.target.value)}
                      disabled={submitted}
                    />
                    Not Given
                  </label>
                </div>
                {submitted && (
                  <div className={`answer-feedback ${results.details.tf4.correct ? 'correct' : 'incorrect'}`}>
                    {results.details.tf4.correct ? '✓ Correct' : `✗ Incorrect. Your answer: ${results.details.tf4.userAnswer}. Correct answer: ${results.details.tf4.correctAnswer}`}
                  </div>
                )}
              </div>
            </div>

            {!submitted ? (
              <button type="submit" className="submit-button">Submit Answers</button>
            ) : (
              <div className="results-summary">
                <h3>Results</h3>
                <div className="score-display">
                  <div className="score-item correct-score">
                    <span className="score-label">Correct:</span>
                    <span className="score-value">{results.correct}/{results.total}</span>
                  </div>
                  <div className="score-item incorrect-score">
                    <span className="score-label">Incorrect:</span>
                    <span className="score-value">{results.incorrect}/{results.total}</span>
                  </div>
                  <div className="score-percentage">
                    Score: {Math.round((results.correct / results.total) * 100)}%
                  </div>
                </div>
                <button type="button" onClick={handleReset} className="reset-button">Try Again</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default EnglishTest

