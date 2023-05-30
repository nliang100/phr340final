const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "yes1") {
		correct++;
}
	if (question2 == "yes2") {
		correct++;
}	
	if (question3 == "yes3") {
		correct++;
	}
	
	
	var score;

	if (correct == 0) {
		score = 0;
	}

	if (correct == 1) {
		score = 1;
	}

	if (correct == 2) {
		score = 2;
	}

    if (correct == 3) {
        score = 3;
    }

    let subjective = score / 3 * 100

    
	document.getElementById("message").innerHTML = "You answered " + correct + " questions as having meaning.";
	document.getElementById("subjective").innerHTML = subjective;
	}
	