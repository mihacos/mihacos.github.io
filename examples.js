function variableExamples() {
  console.info(2 + 3);
  console.warn("Costea Mihaela");

  var employed = true;
  var age = 18;
  console.log("Angajat:", employed);
  employed = false;
  console.log("Angajat:", employed);
  employed = "da";
  console.log("Angajat:", employed);

  var Skills = ["html", "css"];
  console.debug("tipul variabile skills:", typeof Skills);
}

function updateTitle(title) {
  var job = document.getElementById("job-title");
  console.warn("job:", job, title);
  console.info(typeof job);
  job.innerHTML = title;
}

// variableExamples();
// updateTitle("Web Developer");
