const wrapper = document.querySelector('.wrapper'); 
const buttonAboutMe = document.querySelector('#aboutMe')
const buttonProjects = document.querySelector('#projects')
const blockAbout = document.querySelector('.description')
const blockProjects = document.querySelector('.projects')

const resizeWindow = () => {
  const scaleFactor = window.innerWidth / wrapper.offsetWidth;
  wrapper.style.transform = `scale(${scaleFactor})`;
}

blockProjects.style.display = 'none'

buttonAboutMe.onclick = () => {
  blockAbout.style.lineHeight = 'normal'
  blockAbout.style.height = 'auto'
  blockAbout.style.top = '0'
  blockProjects.style.display = 'none'
}

buttonProjects.onclick = () => {
  blockProjects.style.display = 'flex'
  blockProjects.style.flexDirection = 'column'
  blockAbout.style.lineHeight = '0px'
  blockAbout.style.top = '-300px'
  blockAbout.style.height = '0px'
}

window.addEventListener('resize', () => {
  resizeWindow()
});

resizeWindow()
