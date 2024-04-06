function showInfo(userName = "Unknow", age = "Unknow", rate = 0, show = "Yes", ...skills) {
  document.write(`<div>`)
  document.write(`<h2>Welcome, ${userName}</h2>`)
  document.write(`<p>Age: ${age}</p>`)
  document.write(`<p>Hour rate: $${rate}</p>`)
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join(" | ")}</p>`)
    } else {
      document.write(`<p>Skills: No skills</p>`)
    }
  } else {
    if (skills.length === 0) {
      document.write(`<p>Skills: No skills</p>`)
    } else {
      document.write(`<p>Skills is hidden</p>`)
    }
  }
  document.write(`</div>`)
}

showInfo("Abdo", 21, 20, "Yes", "html", "css")