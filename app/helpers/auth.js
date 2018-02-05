export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Elvin',
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAoGAAAAJDEyMjg1YjcxLWJmMTMtNGRiOC1iOWVkLWExY2FmMTY0YTQwMQ.jpg',
        uid: 'elvingomez',
      })
    }, 2000)
    })
}
