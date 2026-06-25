function copyEmail(){
  const text = document.getElementById('emailText').textContent;
  const btn = document.getElementById('copyBtn');
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1500);
  });
}
