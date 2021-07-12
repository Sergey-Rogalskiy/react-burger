import s from './pages.module.css'

function Error404() {
  let str: 'lala' | 1 = 'lala'
  str = 'lala'
  let types: boolean| number | bigint| string | symbol | null | undefined | object| 
    { pages: number } | number[] | [number, number] | unknown | void | 'literly'
  types = 'literly1'
  console.log(0 == 0)
  enum Currency {
    RUB = 10,
    USD,
    EUR
  }
  console.log(Currency.RUB)

  // ключевое слово interface
  interface IBook {// нет знака =
    readonly author: string;
    readonly title: string;
    pages: number;
    read: () => string;
    isRead?: boolean;
  } // нет ;
  // ключевое слово type
  type TBook = { // есть знак =
   readonly author: string;
   readonly title: string;
   pages: number;
   read: TStringFunc;
  }; // есть ; 

  type TStringFunc = () => string;

   const hitchhikerGalaxy: IHitchhikerGalaxy  = {
    author: "Д.Адамс",
    title: "Автостопом по галактике",
    pages: 684,
    read: (): string => {
      return "Я читаю, и пусть весь мир подождёт";
    },
    answer: 42,
   } 

   interface IHitchhikerGalaxy extends IBook {
    answer: number;
   }
   
   // вторым аргументом Omit указываются названия полей, которые надо опустить
   type TAuthor = Omit<TBook, 'title' | 'pages'> 

  //  const T = 'T'
  //  const growPlant = <T>(plant: T): T => {
  //   return plant;
  // } 


  return (
    <div className={s.container}>
        404
    </div>
  );
}

export default Error404;
