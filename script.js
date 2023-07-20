const wrapper = document.querySelector(".wrapper");
const buttonAboutMe = document.querySelector("#aboutMe");
const buttonProjects = document.querySelector("#projects");
const blockAbout = document.querySelector(".description");
const blockProjects = document.querySelector(".projects");
const shadow = document.querySelector(".shadow");

const button = document.getElementById("download");

function generatePDF() {
  // Choose the element that your content will be rendered to.
  const element = document.getElementById("cv");
  // Choose the element and save the PDF for your user.
  html2pdf().set({ filename: "Aleksandr_Litvin.pdf" }).from(element).save();
}

button.addEventListener("click", generatePDF);

const resizeWindow = () => {
  if (window.innerHeight > window.innerWidth) {
    const scaleFactor = window.innerWidth / wrapper.offsetWidth;
    wrapper.style.transform = `scale(${scaleFactor})`;
  }
};

blockProjects.style.display = "none";

buttonAboutMe.onclick = () => {
  blockAbout.style.lineHeight = "normal";
  blockAbout.style.height = "auto";
  blockAbout.style.top = "0";
  blockProjects.style.display = "none";
};

buttonProjects.onclick = () => {
  blockProjects.style.display = "flex";
  blockProjects.style.flexDirection = "column";
  blockAbout.style.lineHeight = "0px";
  blockAbout.style.top = "-300px";
  blockAbout.style.height = "0px";
};

window.addEventListener("resize", () => {
  resizeWindow();
});

shadow.style.borderWidth = `10px 380px 20px`;

resizeWindow();
