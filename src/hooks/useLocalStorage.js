import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [value, setStoredValue] = useState(() => {
        if(window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key))
        }
        return initialValue
    })
    const setValue = newValue => {
        setStoredValue(newValue)
        window.localStorage.setItem(key, JSON.stringify(newValue))
    }
    return [value, setValue]
}