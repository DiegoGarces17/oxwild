import React from "react"


export default () => (
    <form className="mt-16 text-center mx-48">
        <label htmlFor="contact-content" className="block text-gray-700 text-xl font-bold mb-2">Envíanos un mensaje</label>
        <div className="flex shadow rounded bg-white border p-2" >
            <textarea
            id="contact-content"
            name="contact-content"
            className="flex-1 py-2 px-3 text-gray-700 focuso:outline-none focus:shadow-outline"> </textarea>
            <button className="btn">Enviar</button>
        </div> 
    </form>
)