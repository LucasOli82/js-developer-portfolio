
async function fetchProfileData() {
    const url = 'https://github.com/LucasOli82/js-developer-portfolio';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
