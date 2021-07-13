export type TIngredient = {
    calories: number
    carbohydrates?: number
    fat:number
    image:string
    image_large:string
    image_mobile:string
    name:string
    price:number
    proteins:number
    type:string
    __v:number
    _id: string
    key?: number
  }

export type TOrder = {
    status: string
    _id: string
    number: number | string
    id:number
    ingredients: Array<string>
    name: string
    createdAt: string
  }

export  type TLocationItem = {
    hash: string
    key: string
    pathname: string
    search: string
    state: null
  }
export  type TLocation = {
    hash: string
    key: string
    pathname: string
    from: TLocationItem
    search: string
    state: { background: TLocationItem } | null
    background: TLocationItem
  }