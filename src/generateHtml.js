// Function that returns the manager card
function renderManager(object) {
  return `
      <div class="col-3">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">${object.name}</h3>
            <h4 class="card-text">Manager</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${object.id}</li>
            <li class="list-group-item">Email: 
              <a href="mailto:${object.email}">${object.email}</a>
            </li>
            <li class="list-group-item">Office: ${object.officeNum}</li>
          </ul>
        </div>
      </div>
`
}

// Function that returns the engineer cards
function renderEngineer(array) {
  let engineerHtml = ``;

  for (let i = 0; i < array.length; i++) {
    engineerHtml += `
      <div class="col-3">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">${array[i].name}</h3>
            <h4 class="card-text">Engineer</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${array[i].id}</li>
            <li class="list-group-item">Email: 
              <a href="mailto:${array[i].email}">${array[i].email}</a>
            </li>
            <li class="list-group-item">GitHub: 
              <a href="https://github.com/${array[i].github}">${array[i].github}</a>
            </li>
          </ul>
        </div>
      </div>
`
  }

  return engineerHtml;
}

// Function that returns the intern cards
function renderIntern(array) {
  let internHtml = ``;

  for (let i = 0; i < array.length; i++) {
    internHtml += `
      <div class="col-3">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">${array[i].name}</h3>
            <h4 class="card-text">Intern</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${array[i].id}</li>
            <li class="list-group-item">Email: 
              <a href="mailto:${array[i].email}">${array[i].email}</a>
            </li>
            <li class="list-group-item">School: ${array[i].school}</li>
          </ul>
        </div>
      </div>
`
  }

  return internHtml;
}

// Function that generates the HTML content
function generateHtml(managerObject, engineerArray, internArray) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
  <header class="navbar justify-content-center bg-primary mb-4" data-bs-theme="dark">
    <h1>My Team</h1>
  </header>

  <div class="container">
    <div class="row justify-content-center gy-4">
      ${renderManager(managerObject)}
      ${renderEngineer(engineerArray)}
      ${renderIntern(internArray)}

    </div>
  </div>
</body>
</html>`
}

module.exports = generateHtml;