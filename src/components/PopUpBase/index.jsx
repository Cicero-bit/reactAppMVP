import React from 'react';

export default function PopupBase({ children, onCLose }) {
  function handleSectionClick(e) {
    if (e.target.id == 'bgSection') onCLose();
  }
  return (
    <>
      <section
        id="bgSection"
        className="bg-black/50 bg-opacity-10 fixed inset-0 flex items-center justify-center z-50"
        onClick={handleSectionClick}
      >
        <div className="bg-white rounded shadow-xl w-4/11">{children}</div>
      </section>
    </>
  );
}
