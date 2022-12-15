const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')
const myQuestions = [
    {
        question: 'Як з грецької перекладається слово "космос" κόσμος?',
        answers: {
            a: 'Зірка',
            b: 'Простір',
            c: 'Мир',
            d: 'Повітря'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Як звали першу тварину, виведену на орбіту Землі?',
        answers: {
            a: 'Лайка',
            b: 'Білка',
            c: 'Мері',
            d: 'Жучка'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Перші знімки зворотного боку Місяця зробив',
        answers: {
            a: 'корабель Джотто (ЄС), 2 липня 1985.',
            b: 'корабель Аполлон 11 (США) , 16 липня 1969.',
            c: 'корабель Місяць-3 (СРСР), 4 жовтня 1959.',
            d: 'корабель Фрей (США) 1 грудня 1980.'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Хто запропонував геліоцентричну систему будови сонячної системи?',
        answers: {
            a: 'Микола Коперник',
            b: 'Галилео Галилей',
            c: 'Джордано Бруно',
            d: 'Піфагор'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Які одиниці вимірюють відстань між близькими галактиками?',
        answers: {
            a: 'млн. кілометрів.',
            b: 'мілісекунди.',
            c: 'календарні роки.',
            d: 'мегапаскалі.'
        },
        correctAnswer: 'd'
    }
]

function buildQuiz() {
    const output = []

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = []

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            )
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        )
    })

    quizContainer.innerHTML = output.join('')
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers')

    let numCorrect = 0

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber]
        const selector = `input[name=question${questionNumber}]:checked`
        const userAnswer = (answerContainer.querySelector(selector) || {}).value

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++

            answerContainers[questionNumber].style.color = 'green'
        } else {
            answerContainers[questionNumber].style.color = 'red'
        }
    })

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
}

buildQuiz()

submitButton.addEventListener('click', showResults)
