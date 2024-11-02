document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const texts = ["a Researcher", "an AI Developer"];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            textElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // 다음 글자를 타이핑하는 속도 조절
        } else {
            // 타이핑이 끝나면 잠시 멈춤 후 다음 텍스트로 전환
            setTimeout(() => {
                textElement.textContent = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeText();
            }, 2000); // 2초 대기 후 텍스트 초기화
        }
    }

    // 초기 타이핑 애니메이션 시작
    typeText();
});
