import React from 'react';

const style = {
  color: '#FFFFFF',
  fontSize: '24px',
  fontWeight: '400',
  letterSpacing: '3px',
  borderTop: '0px'
};

export default function TableOfContents({ questions, links }) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th className="table-head" style={style}>Questions</th>
        </tr>
        { questions.map(({ id, question }) => <tr><th><a href={`#${id}`}>{question}</a></th></tr>) }
      </tbody>
    </table>
  );
}
