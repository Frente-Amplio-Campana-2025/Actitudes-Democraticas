// ====== DATA ======
const questions = [
  {
    id: 1,
    text: "El Tribunal Supremo de Elecciones garantiza elecciones libres y democráticas",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 2,
    text: "La democracia implica procesos lentos para cambios, pero garantiza que el gobierno lo elija el pueblo",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 3,
    text: "Las decisiones ambientales se deben tomar con criterios técnicos y no por intereses de los políticos de turno",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 4,
    text: "Sin importar quien está en el gobierno, se deben investigar los actos de corrupción.",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 5,
    text: "El gobierno de turno debe ser ejemplo de respeto de la ley, y promover que la ciudadanía lo haga.",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 6,
    text: "Las personas tienen derecho a opinar sin temer ataques por esto.",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 7,
    text: "Las personas tienen derecho a opinar sin temer ataques por esto.",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 8,
    text: "El periodismo no puede ser limitado por el gobierno de turno.",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 9,
    text: "Es un derecho poder informarse por diversos medios de comunicación, aunque sean críticos del gobierno.",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 10,
    text: "La oposición política al gobierno es una forma de control importante para evitar que el gobierno caiga en corrupción.",
    scores: { yes: 1, no: -1 }
  },
  {
    id: 11,
    text: "Todas las personas tienen derecho a organizarse en partidos políticos aunque no comparta sus ideas.",
    scores: { yes: 1, no: -1 }
  }
  
]

// ====== STATE ======
let currentIndex = 0
let totalScore = 0

// ====== ELEMENTS ======
const container = document.getElementById("questions-container")
const resultBox = document.getElementById("result")
const resultText = document.getElementById("result-text")
const welcome = document.getElementById("welcome")
const test = document.getElementById("test")
const startBtn = document.getElementById("start-btn")
const restartBtn = document.getElementById("restart-btn")

// ====== RENDER QUESTION ======
function renderQuestion() {
  const q = questions[currentIndex]

  container.innerHTML = `
    <div class="question">
      <p><strong>${q.text}</strong></p>
      <div class="answers">
        <label>
          <input type="radio" name="answer" value="yes">
          Sí
        </label>
        <label>
          <input type="radio" name="answer" value="no">
          No
        </label>
      </div>
    </div>
  `

  document
    .querySelectorAll('input[name="answer"]')
    .forEach(input => {
      input.addEventListener("change", handleAnswer)
    })
}

// ====== HANDLE ANSWER ======
function handleAnswer(event) {
  const answer = event.target.value
  const q = questions[currentIndex]

  totalScore += q.scores[answer]
  currentIndex++

  if (currentIndex < questions.length) {
    renderQuestion()
  } else {
    showResult()
  }
}

// ====== RESULT ======
function showResult() {
  test.style.display = "none"
  resultBox.style.display = "block"

  let interpretation = ""

  if (totalScore <= -1) {
    interpretation = "Baja adhesión a principios democráticos."
  } else if (totalScore === 0) {
    interpretation = "Postura ambigua o inconsistente."
  } else {
    interpretation = "Alta adhesión a principios democráticos."
  }

  resultText.textContent = interpretation
}

// ====== START TEST ======
startBtn.addEventListener("click", () => {
  welcome.style.display = "none"
  resultBox.style.display = "none"
  test.style.display = "block"

  currentIndex = 0
  totalScore = 0

  renderQuestion()
})

// ====== RESTART ======
restartBtn.addEventListener("click", () => {
  resultBox.style.display = "none"
  welcome.style.display = "block"

  currentIndex = 0
  totalScore = 0
})

// ====== INIT ======
test.style.display = "none"
resultBox.style.display = "none"