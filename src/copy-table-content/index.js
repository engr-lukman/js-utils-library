/**
 * Copies the content of a table element to the clipboard
 * @param {string} tblId - The ID of the table element to copy
 */
export const onCopyTableContent = (tblId) => {
  const tblContent = document.getElementById(tblId);
  const range = document.createRange();
  range.selectNode(tblContent);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
};

export default onCopyTableContent;
