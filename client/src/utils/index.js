import { surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver'

export function getRandomPrompt(prompt) {
    const randomIdx = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIdx]

    if (randomPrompt === prompt) {
        return getRandomPrompt(prompt)
    }

    return randomPrompt
}

export async function downLoadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}