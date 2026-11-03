const FAQ = [
    {question: '코딩을 처음 시작해도 되나요?', answer: '네! 기초부터 시작하는 트랙에서 함께 배울 수 있어요.'},
    {question: '어떤 활동을 하나요?', answer: '트랙 교육, 소모임, MT, 총회, 해커톤과 프로젝트를 함께합니다.'},
    {question: '이 사이트에서 지원할 수 있나요?', answer: '이 페이지는 디자인 시연용입니다. 실제 지원은 동아리 운영진의 모집 공지를 확인해 주세요.'}
];

export function FaqDialog() {
    return (
        <>
            <h2>자주 묻는 질문</h2>
            {FAQ.map(({question, answer}, index) => (
                <details key={question} open={index === 0}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                </details>
            ))}
        </>
    );
}
