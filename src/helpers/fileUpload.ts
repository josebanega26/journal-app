export const fileUpload = async (file: File): Promise<string | Error> => {
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'journal-app')
    formData.append('file', file)

    const res = await fetch('https://api.cloudinary.com/v1_1/ds1sb6puy/upload', {
      method: 'POST',
      body: formData
    })
    if (res.ok) {
      const fileUploaded = await res.json()
      return fileUploaded?.secure_url as string
    }
    else {
      throw await res.json()
    }
  }
  catch (error) {
    throw error
  }
}