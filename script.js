const countValue = document.getElementById('countValue');
const helloBtn = document.getElementById('helloBtn');
const demoForm = document.getElementById('demoForm');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const resultText = document.getElementById('resultText');

let count = 0;

helloBtn.addEventListener('click', () => {
  count += 1;
  countValue.textContent = count;
  resultText.textContent = `버튼이 ${count}번 눌렸습니다.`;
});

demoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (!name) {
    resultText.textContent = '이름을 입력해 주세요.';
    return;
  }

  if (!age) {
    resultText.textContent = '나이를 입력해 주세요.';
    return;
  }

  resultText.textContent = `${name}님(${age}세), 입력 테스트 완료!`;
  nameInput.value = '';
  ageInput.value = '';
});
