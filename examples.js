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
  console.debug("tipul variabile skills:", typeoff, Skills);
  var job = document.getElementById("job-title");
  console.warn("job:", job);
  console.info(typeof job);
}

variableExamples();
