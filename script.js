document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const texts = ["I'm a Researcher", "I'm an AI Developer"];
    let textIndex = 0;

    function typeText() {
        // 텍스트 초기화
        textElement.style.width = '0'; // 타이핑 효과를 위한 너비 초기화
        textElement.classList.remove('typing'); // 클래스 제거로 애니메이션 초기화
        void textElement.offsetWidth; // 리플로우 발생시켜 애니메이션 재적용
        textElement.classList.add('typing'); // 클래스 재적용으로 애니메이션 실행
        textElement.textContent = texts[textIndex]; // 텍스트 업데이트

        // 텍스트 인덱스 업데이트
        textIndex = (textIndex + 1) % texts.length;
    }

    // 첫 타이핑 애니메이션 실행 및 4초마다 반복
    typeText();
    setInterval(typeText, 4000);
});
