import {handleSubmit} from './js/formHandler'
import {checkURL} from './js/checkURL'
import './styles/style.scss'
 
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const btn = document.querySelector ('.btn')
    btn.addEventListener('click', e => {
        e.preventDefault()
        Client.handleSubmit()
    })
});
export {
     checkURL,
     handleSubmit
}
