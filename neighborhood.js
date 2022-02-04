const recBtn = document.querySelector('.random-btn')
const ranRes = () => {
    let resList = ['Pho Cow Cali', 'Siam Nara', 'Rakiraki Ramen', 'Golden Chopstick', 'Tofu House']

    let res = resList[Math.floor(Math.random() * resList.length)]
    alert(res)
}
recBtn.addEventListener('click', ranRes)