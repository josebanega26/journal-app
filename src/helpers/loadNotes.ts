import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid: string) => {

  const doc = await db.collection(`${uid}/journal/notes`).get()
  const notes: any[] = []
  doc.forEach((result) => {
    notes.push({
      id: result.id,
      ...result.data()
    })
  })
  return notes.sort((a: any, b: any) => (b.date - a.date))

}