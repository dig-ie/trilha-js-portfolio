async function resolveprofileData(profileData) {
  //function to fill dynamically the profille data fields based on '.././data/profile.json'
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;
  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;
  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
}

async function resolveSoftSkilss(profileData) {
  const softSKills = document.getElementById("profile.skills1.softSkills");
  softSKills.innerHTML = profileData.skills1.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function getDevIconClass(techName) {
  const iconMap = {
    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",
    css: "devicon-css3-plain",
    css3: "devicon-css3-plain",
    html: "devicon-html5-plain",
    html5: "devicon-html5-plain",
    react: "devicon-react-original",
    java: "devicon-java-plain",
    mysql: "devicon-mysql-plain",
    mongodb: "devicon-mongodb-plain",
    nodejs: "devicon-nodejs-plain",
    git: "devicon-git-plain",
    github: "devicon-github-original",
  };

  const normalized = techName.toLowerCase().replace(/\s+/g, "");
  return iconMap[normalized] || "devicon-javascript-plain";
}

async function resolveHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills1.hardSKills");
  hardSkills.innerHTML = profileData.skills1.hardSkills
    .map((skill) => `<li><i class="${getDevIconClass(skill.name)}"></i></li>`)
    .join("");
}

async function resolveLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

async function resolveEducation(profileData) {
  const educationUl = document.getElementById("profile.education");
  educationUl.innerHTML = profileData.education
    .map(
      (education) => `<li>
  <br />
  <h3>${education.name}</h3>
  <span
    >${education.description}
  </span>
</li>`
    )
    .join("");
}
async function resolvePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map(
      (project) => `<li>
  <h3>${project.name}</h3>
  <a
                target="_blank"
                href="${project.url}"
                >${project.url}</a
              >
</li>`
    )
    .join("");
}
async function resolveProfessionalXP(profileData) {
  const professionalXP = document.getElementById(
    "profile.professionalExperience"
  );
  professionalXP.innerHTML = profileData.professionalExperience
    .map(
      (XP) => `<li>
  <h2>${XP.name}</h2>
  <span>${XP.period}</span>
  <p>
  ${XP.description}
  </p>
</li>`
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", async function () {
  const profileData = await fetchProfileData();
  console.log(profileData);
  resolveprofileData(profileData);
  resolveSoftSkilss(profileData);
  resolveHardSkills(profileData);
  resolveLanguages(profileData);
  resolveEducation(profileData);
  resolveProfessionalXP(profileData);
  resolvePortfolio(profileData);
});
