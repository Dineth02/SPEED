export type Credentals = {
    _id?: string
    username: string
    hashedpassword: string
}

export const DefaultCreds: Credentals = {
    _id: undefined, 
    username: '',
    hashedpassword: ''
}
