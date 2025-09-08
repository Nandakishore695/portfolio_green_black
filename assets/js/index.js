function scrollToOptions(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

(function () {
  const fullName = "Vishwanath Nandakishore";
  let arrayName = [];
  let i = 0;

  let interval = setInterval(() => {
    arrayName.push(fullName[i]); // add one character
    document.getElementById("fullName").innerText = arrayName.join("");

    i++;
    if (i === fullName.length) {
      clearInterval(interval); // stop when done
    }
  }, 200); // print every 500ms
})();

const skills = {
  frontend: [
    {
      name: "React JS",
      icon: "./images/react_logo.svg",
    },
    {
      name: "JavaScript",
      icon: "./images/javascript_logo.svg",
    },
    {
      name: "TypeScript",
      icon: "./images/typescript_logo.svg",
    },
    {
      name: "HTML",
      icon: "./images/html_logo.svg",
    },
    {
      name: "CSS",
      icon: "./images/css_logo.svg",
    },
    {
      name: "BootStrap",
      icon: "./images/bootstrap_logo.svg",
    },
    {
      name: "Redux",
      icon: "./images/redux_logo.svg",
    },
    {
      name: "Ant Design",
      icon: "./images/ant_design_logo.svg",
    },
    {
      name: "Tailwind CSS ",
      icon: "./images/tailwind_logo.svg",
    },
    {
      name: "Next JS",
      icon: "./images/nextJS_logo.svg",
    },
  ],
  backend: [
    {
      name: "Express JS",
      icon: "./images/expressjs_logo.svg",
    },
    {
      name: "MongoDB",
      icon: "./images/MongoDB_logo.svg",
    },
  ],
  tool: [
    {
      name: "Git VCS",
      icon: "./images/git_logo.svg",
    },
    {
      name: "GitHub",
      icon: "./images/github_logo.svg",
    },
  ],
};

function skill(type = "frontend") {
  if (type === "frontend") {
    document.getElementById("bg-green-frontend").style.backgroundColor = "#14A76C";
    document.getElementById("bg-green-frontend").style.color = "#ffffff";
    document.getElementById("idSkill").innerHTML = skills.frontend
      .map((skills) => {
       return  `<div class="col-lg-2 col-6 d-flex flex-column gap-2 align-items-center">
                    <div
                        class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                        <img src="${skills.icon}" alt="React Logo" width="40" height="40">
                    </div>
                    <h4 class="fw-semibold mb-0 text-body-emphasis">${skills.name}</h4>
                </div>`
      })
      .join("");
  } else if (type === "backend") {
        document.getElementById("bg-green-backend").style.backgroundColor = "#14A76C";
    document.getElementById("bg-green-backend").style.color = "#ffffff";
    document.getElementById("idSkill").innerHTML = skills.backend
      .map((skills) => {
        return `<div class="col-lg-2 col-6 d-flex flex-column gap-2 align-items-center">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                    <img src="${skills.icon}"  width="40" height="40">
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">${skills.name}</h4>
              </div>`;
      })
      .join("");
  } else {
     document.getElementById("bg-green-backend").style.backgroundColor = "#14A76C";
    document.getElementById("bg-green-backend").style.color = "#ffffff";
    document.getElementById("idSkill").innerHTML = skills.tool
      .map((skills) => {
        return `<div class="col-lg-2 col-6 d-flex flex-column gap-2 align-items-center">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                    <img src="${skills.icon}"  width="40" height="40">
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">${skills.name}</h4>
              </div>`;
      })
      .join("");
  }
}
