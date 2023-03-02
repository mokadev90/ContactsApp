import storage from '@react-native-firebase/storage'

export default file => onSuccess => onError => {
  const firePath = `contact-pictures/user/777/${file.path}`

  const ref = storage().ref(firePath)

  const task = ref.putFile(file.path)

  task
    .then(async () => {
      const url = await ref.getDownloadURL()
      onSuccess(url)
    })
    .catch(error => {
      onError(error)
    })
}
