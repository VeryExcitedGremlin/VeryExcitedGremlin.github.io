import React from 'react';
import { getReadingTime } from '../helpers';

export function ArticleStats({ showExplanation, text, transformer }) {
  const readingTime = getReadingTime(text);

  return (
    <div>
      <h4>Reading time</h4>
      {showExplanation && (
        <p className='explanation'>
          Reading time: Predicts the amount of time it will take to read this
          article. Based on an average reading speed of 238 words per minute.
        </p>
      )}
      <p>{readingTime}</p>
    </div>
  );
}
