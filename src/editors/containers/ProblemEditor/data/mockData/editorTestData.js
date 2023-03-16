export const checkboxesWithFeedbackAndHints = {
  solution: `<div class="detailed-solution">
    <p>Explanation</p>
    <p>
        You can form a voltage divider that evenly divides the input
        voltage with two identically valued resistors, with the sampled
        voltage taken in between the two.
    </p>
    <p><img src="/static/images/voltage_divider.png" alt=""></img></p>
  </div>`,
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  answers: {
    A: '<p>a correct answer</p>',
    B: '<p>an incorrect answer</p>',
    C: '<p>an incorrect answer</p>',
    D: '<p>a correct answer</p>',
  },
  selectedFeedback: {
    A: '<p>You can specify optional feedback that appears after the learner selects and submits this answer.</p>',
    B: '',
    C: '<p>You can specify optional feedback for none, all, or a subset of the answers.</p>',
    D: '',
  },
  unselectedFeedback: {
    A: '<p>You can specify optional feedback that appears after the learner clears and submits this answer.</p>',
    B: '',
    C: '<p>You can specify optional feedback for selected answers, cleared answers, or both.</p>',
    D: '',
  },
  hints: [
    '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>',
    '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>',
  ],
  groupFeedback: {
    0: '<p>You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted.</p>',
    1: '<p>You can specify optional feedback for one, several, or all answer combinations.</p>',
  },
};

export const dropdownWithFeedbackAndHints = {
  solution: '',
  selectedFeedback: {
    A: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
    B: '',
    C: '<p>You can specify optional feedback for none, a subset, or all of the answers.</p>',
  },
  hints: [
    '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>',
    '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>',
  ],
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
};

export const multipleChoiceWithFeedbackAndHints = {
  solution: '',
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  answers: {
    A: '<p>an incorrect answer</p>',
    B: '<p>the correct answer</p>',
    C: '<p>an incorrect answer</p>',
  },
  selectedFeedback: {
    A: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
    B: '',
    C: '<p>You can specify optional feedback for none, a subset, or all of the answers.</p>',
  },
  hints: [
    '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>',
    '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>',
  ],
};

export const numericInputWithFeedbackAndHints = {
  solution: '',
  selectedFeedback: {
    A: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
    B: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
  },
  hints: [
    '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>',
    '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>',
  ],
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
};

export const textInputWithFeedbackAndHints = {
  solution: '',
  selectedFeedback: {
    A: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
    B: '',
    C: '<p>You can specify optional feedback for none, a subset, or all of the answers.</p>',
  },
  hints: [
    '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>',
    '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>',
  ],
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
};

export const textInputWithFeedbackAndHintsWithMultipleAnswers = {
  solution: '',
  selectedFeedback: {
    A: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
    B: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
    C: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
    D: '<p>You can specify optional feedback for none, a subset, or all of the answers.</p>',
  },
  hints: [
    '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>',
    '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>',
  ],
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
};