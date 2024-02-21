import { getCookie, hasCookie, setCookie } from "cookies-next"




export const getCookieCart = (): { [id: string]: number } => {
    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}')
        return cookieCart
    }

    return {}
}


export const addToCart = (id: string) => {
    const cookieCart = getCookieCart()
    if (cookieCart[id]) {
        cookieCart[id]++
    } else {
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart))
}

export const removeFromCart = (id: string) => {
    const cookieCart = getCookieCart()
    if (cookieCart[id]) {
        if (cookieCart[id] > 1) {
            cookieCart[id]--
        } else {
            delete cookieCart[id]
        }
    }
    setCookie('cart', JSON.stringify(cookieCart))
}

export const removeSingleItemFromCart = (id: string) => {
    const cookieCart = getCookieCart()
    if(cookieCart[id] <= 1) {
        delete cookieCart[id]
    }else{
        cookieCart[id]--
    }
    setCookie('cart', JSON.stringify(cookieCart))
}